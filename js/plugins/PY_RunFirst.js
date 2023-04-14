//=============================================================================
// PY_RunFirst.js
//=============================================================================
/*:
 * @plugindesc (v1.1)即时战斗跑步、朝向、移速设定插件 
 * @author 破夜沙狼
 * @help 
说明：将此插件放入插件管理器，开启即可。由于本插件牵扯了窗口管理器，会屏蔽其
他插件的设置窗口，所以请将此插件放到其他牵扯设置窗口插件的上面。
============================================================================
【朝向相关】:
插件指令：锁定朝向
插件指令：取消锁定
============================================================================
【跑步相关】：
插件指令：开启跑步
插件指令：关闭跑步
============================================================================
【移速相关】：
插件指令：速度:x            //x为数字，从0.5~6，每隔0.5设置
例如：速度:0.5/速度:1/速度:1.5/速度:2，依次类推
注意：速度后面的冒号为英文冒号.
============================================================================
使用条款：本插件可免费用于非商业及商业用途。
请在游戏结尾名单中署名：破夜沙狼
============================================================================
更新日志：
v1.1 更新移动、跑步、移速、朝向相关的设置
v1.0 完成此插件
 * 
 * @param 跑步参数
 * @type select
 * @option 开启跑步
 * @value 0
 * @option 关闭跑步
 * @value 1
 * @desc 你可以选择来关闭或者开启跑步
 * @default 0
 * 
 * @param 窗口设置
 * @type select
 * @option 开启跑步和指令窗口
 * @value 0
 * @option 关闭跑步和指令窗口
 * @value 1
 * @option 只关闭跑步窗口
 * @value 2
 * @desc 你可以选择是否来关闭始终跑步和指令的窗口
 * @default 2
 * 
 * @param 开关控制禁止玩家移动
 * @desc 设置一个开关的ID，当这个开关打开时，会禁止玩家的移动
 * @type number
 * @min 1
 * @max 10000
 * @default 1
 * 
 */
 







(function() {

    var parameters = PluginManager.parameters('PY_RunFirst');//声明并调用插件
	
    var PY_run = parameters['跑步参数'];//传入跑步的参数
	var PY_chuangkou = parameters['窗口设置'];//传入窗口的参数
    var PY_runSwich = Number(parameters['开关控制禁止玩家移动']);
    
	//插件指令
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === '开启跑步') {
            Game_Player.prototype.isDashing = function(){
                return true;
            };
        } 
        if (command === '关闭跑步') {
            Game_Player.prototype.isDashing = function(){
                return false;
            };
        }
        if (command === '速度:0.5') {
            $gamePlayer._moveSpeed = 0.5;
        }
        if (command === '速度:1') {
            $gamePlayer._moveSpeed = 1;
        }
        if (command === '速度:1.5') {
            $gamePlayer._moveSpeed = 1.5;
        }
        if (command === '速度:2') {
            $gamePlayer._moveSpeed = 2;
        }
        if (command === '速度:2.5') {
            $gamePlayer._moveSpeed = 2.5;
        }
        if (command === '速度:3') {
            $gamePlayer._moveSpeed = 3;
        }
        if (command === '速度:3.5') {
            $gamePlayer._moveSpeed = 3.5;
        }
        if (command === '速度:4') {
            $gamePlayer._moveSpeed = 4;
        }
        if (command === '速度:4.5') {
            $gamePlayer._moveSpeed = 4.5;
        }
        if (command === '速度:5') {
            $gamePlayer._moveSpeed = 5;
        }
        if (command === '速度:5.5') {
            $gamePlayer._moveSpeed = 5.5;
        }
        if (command === '速度:6') {
            $gamePlayer._moveSpeed = 6;
        }
        //朝向
        if (command === '锁定朝向') {
            $gamePlayer.setDirectionFix(true);
        }
        if (command === '取消锁定') {
            $gamePlayer.setDirectionFix(false);
        }

    };



//下方将传入的参数进行判断执行：跑步/不跑步
Game_Player.prototype.isDashing = function(){
        if(PY_run == 0){ 
            return true;
            
        }else if(PY_run == 1){
			return false;
            
        }
};

//开关控制移动
let PY_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
    if ($gameSwitches.value(PY_runSwich)) return;
    PY_moveByInput.call(this);
};

//禁止显示跑步窗口、指令窗口
Window_Options.prototype.addGeneralOptions = function() {
    if(PY_chuangkou == 0){
	   this.addCommand(TextManager.alwaysDash, 'alwaysDash');
       this.addCommand(TextManager.commandRemember, 'commandRemember');
	} 
    if(PY_chuangkou == 1){
	//执行空事件
	}
    if(PY_chuangkou == 2){
        this.addCommand(TextManager.commandRemember, 'commandRemember');
    }

};

})();

