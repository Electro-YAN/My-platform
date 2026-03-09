gdjs.Level2Code = {};
gdjs.Level2Code.localVariables = [];
gdjs.Level2Code.idToCallbackMap = new Map();
gdjs.Level2Code.GDDoor2Objects1= [];
gdjs.Level2Code.GDDoor2Objects2= [];
gdjs.Level2Code.GDDoor2Objects3= [];
gdjs.Level2Code.GDLockObjects1= [];
gdjs.Level2Code.GDLockObjects2= [];
gdjs.Level2Code.GDLockObjects3= [];
gdjs.Level2Code.GDSkeletObjects1= [];
gdjs.Level2Code.GDSkeletObjects2= [];
gdjs.Level2Code.GDSkeletObjects3= [];
gdjs.Level2Code.GDgradient_9595radialObjects1= [];
gdjs.Level2Code.GDgradient_9595radialObjects2= [];
gdjs.Level2Code.GDgradient_9595radialObjects3= [];
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects1= [];
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects2= [];
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects3= [];
gdjs.Level2Code.GDTrophyObjects1= [];
gdjs.Level2Code.GDTrophyObjects2= [];
gdjs.Level2Code.GDTrophyObjects3= [];
gdjs.Level2Code.GDPlayerObjects1= [];
gdjs.Level2Code.GDPlayerObjects2= [];
gdjs.Level2Code.GDPlayerObjects3= [];
gdjs.Level2Code.GDFadeObjects1= [];
gdjs.Level2Code.GDFadeObjects2= [];
gdjs.Level2Code.GDFadeObjects3= [];


gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level2Code.GDPlayerObjects1, gdjs.Level2Code.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationIndex(5);
}
}
}

}


{

/* Reuse gdjs.Level2Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}
}

}


};gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDLockObjects1Objects = Hashtable.newFrom({"Lock": gdjs.Level2Code.GDLockObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level2Code.GDTrophyObjects1});
gdjs.Level2Code.asyncCallback15094300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level2Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", true);
}
gdjs.Level2Code.localVariables.length = 0;
}
gdjs.Level2Code.idToCallbackMap.set(15094300, gdjs.Level2Code.asyncCallback15094300);
gdjs.Level2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Level2Code.asyncCallback15094300(runtimeScene, asyncObjectsList)), 15094300, asyncObjectsList);
}
}

}


};gdjs.Level2Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Hurt") ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}

{ //Subevents
gdjs.Level2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Hurt") ) {
        isConditionTrue_0 = true;
        gdjs.Level2Code.GDPlayerObjects1[k] = gdjs.Level2Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Level2Code.GDFadeObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Unfade", 0, "linear", 5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lock"), gdjs.Level2Code.GDLockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDLockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDLockObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDLockObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDLockObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "7ab074a25f60f44dfb661caff8e5397e3653e25b1ee0d09fd13650317664f087_MetalV2_Jump_Land_02.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level2Code.GDTrophyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDTrophyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Win");
}
}
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}

{ //Subevents
gdjs.Level2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDDoor2Objects1.length = 0;
gdjs.Level2Code.GDDoor2Objects2.length = 0;
gdjs.Level2Code.GDDoor2Objects3.length = 0;
gdjs.Level2Code.GDLockObjects1.length = 0;
gdjs.Level2Code.GDLockObjects2.length = 0;
gdjs.Level2Code.GDLockObjects3.length = 0;
gdjs.Level2Code.GDSkeletObjects1.length = 0;
gdjs.Level2Code.GDSkeletObjects2.length = 0;
gdjs.Level2Code.GDSkeletObjects3.length = 0;
gdjs.Level2Code.GDgradient_9595radialObjects1.length = 0;
gdjs.Level2Code.GDgradient_9595radialObjects2.length = 0;
gdjs.Level2Code.GDgradient_9595radialObjects3.length = 0;
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects1.length = 0;
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects2.length = 0;
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects3.length = 0;
gdjs.Level2Code.GDTrophyObjects1.length = 0;
gdjs.Level2Code.GDTrophyObjects2.length = 0;
gdjs.Level2Code.GDTrophyObjects3.length = 0;
gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects3.length = 0;
gdjs.Level2Code.GDFadeObjects1.length = 0;
gdjs.Level2Code.GDFadeObjects2.length = 0;
gdjs.Level2Code.GDFadeObjects3.length = 0;

gdjs.Level2Code.eventsList2(runtimeScene);
gdjs.Level2Code.GDDoor2Objects1.length = 0;
gdjs.Level2Code.GDDoor2Objects2.length = 0;
gdjs.Level2Code.GDDoor2Objects3.length = 0;
gdjs.Level2Code.GDLockObjects1.length = 0;
gdjs.Level2Code.GDLockObjects2.length = 0;
gdjs.Level2Code.GDLockObjects3.length = 0;
gdjs.Level2Code.GDSkeletObjects1.length = 0;
gdjs.Level2Code.GDSkeletObjects2.length = 0;
gdjs.Level2Code.GDSkeletObjects3.length = 0;
gdjs.Level2Code.GDgradient_9595radialObjects1.length = 0;
gdjs.Level2Code.GDgradient_9595radialObjects2.length = 0;
gdjs.Level2Code.GDgradient_9595radialObjects3.length = 0;
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects1.length = 0;
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects2.length = 0;
gdjs.Level2Code.GDgradient_9595horizontal_9595mirrorObjects3.length = 0;
gdjs.Level2Code.GDTrophyObjects1.length = 0;
gdjs.Level2Code.GDTrophyObjects2.length = 0;
gdjs.Level2Code.GDTrophyObjects3.length = 0;
gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects3.length = 0;
gdjs.Level2Code.GDFadeObjects1.length = 0;
gdjs.Level2Code.GDFadeObjects2.length = 0;
gdjs.Level2Code.GDFadeObjects3.length = 0;


return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
