gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.idToCallbackMap = new Map();
gdjs.EndCode.GDNewTextObjects1= [];
gdjs.EndCode.GDNewTextObjects2= [];
gdjs.EndCode.GDBlue_9595blockObjects1= [];
gdjs.EndCode.GDBlue_9595blockObjects2= [];
gdjs.EndCode.GDPlayerObjects1= [];
gdjs.EndCode.GDPlayerObjects2= [];
gdjs.EndCode.GDFadeObjects1= [];
gdjs.EndCode.GDFadeObjects2= [];


gdjs.EndCode.asyncCallback15134948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndCode.localVariables);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
gdjs.EndCode.localVariables.length = 0;
}
gdjs.EndCode.idToCallbackMap.set(15134948, gdjs.EndCode.asyncCallback15134948);
gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(20), (runtimeScene) => (gdjs.EndCode.asyncCallback15134948(runtimeScene, asyncObjectsList)), 15134948, asyncObjectsList);
}
}

}


};gdjs.EndCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.EndCode.GDFadeObjects1);
{for(var i = 0, len = gdjs.EndCode.GDFadeObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fade", 0, "linear", 4, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "c35dfd2a54b17c301f837dad1f9aee111fd85dd0ff01828eb5534f7050bc87c2_27 - Victory of the Swine.aac", false, 70, 1);
}

{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDNewTextObjects1.length = 0;
gdjs.EndCode.GDNewTextObjects2.length = 0;
gdjs.EndCode.GDBlue_9595blockObjects1.length = 0;
gdjs.EndCode.GDBlue_9595blockObjects2.length = 0;
gdjs.EndCode.GDPlayerObjects1.length = 0;
gdjs.EndCode.GDPlayerObjects2.length = 0;
gdjs.EndCode.GDFadeObjects1.length = 0;
gdjs.EndCode.GDFadeObjects2.length = 0;

gdjs.EndCode.eventsList1(runtimeScene);
gdjs.EndCode.GDNewTextObjects1.length = 0;
gdjs.EndCode.GDNewTextObjects2.length = 0;
gdjs.EndCode.GDBlue_9595blockObjects1.length = 0;
gdjs.EndCode.GDBlue_9595blockObjects2.length = 0;
gdjs.EndCode.GDPlayerObjects1.length = 0;
gdjs.EndCode.GDPlayerObjects2.length = 0;
gdjs.EndCode.GDFadeObjects1.length = 0;
gdjs.EndCode.GDFadeObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
