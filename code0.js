gdjs.Level1Code = {};
gdjs.Level1Code.localVariables = [];
gdjs.Level1Code.idToCallbackMap = new Map();
gdjs.Level1Code.GDblockObjects1= [];
gdjs.Level1Code.GDblockObjects2= [];
gdjs.Level1Code.GDblockObjects3= [];
gdjs.Level1Code.GDbeeObjects1= [];
gdjs.Level1Code.GDbeeObjects2= [];
gdjs.Level1Code.GDbeeObjects3= [];
gdjs.Level1Code.GDMovingBlockObjects1= [];
gdjs.Level1Code.GDMovingBlockObjects2= [];
gdjs.Level1Code.GDMovingBlockObjects3= [];
gdjs.Level1Code.GDDisappearPlatformObjects1= [];
gdjs.Level1Code.GDDisappearPlatformObjects2= [];
gdjs.Level1Code.GDDisappearPlatformObjects3= [];
gdjs.Level1Code.GDbricksObjects1= [];
gdjs.Level1Code.GDbricksObjects2= [];
gdjs.Level1Code.GDbricksObjects3= [];
gdjs.Level1Code.GDcactusObjects1= [];
gdjs.Level1Code.GDcactusObjects2= [];
gdjs.Level1Code.GDcactusObjects3= [];
gdjs.Level1Code.GDCoinObjects1= [];
gdjs.Level1Code.GDCoinObjects2= [];
gdjs.Level1Code.GDCoinObjects3= [];
gdjs.Level1Code.GDbridgeObjects1= [];
gdjs.Level1Code.GDbridgeObjects2= [];
gdjs.Level1Code.GDbridgeObjects3= [];
gdjs.Level1Code.GDDoorObjects1= [];
gdjs.Level1Code.GDDoorObjects2= [];
gdjs.Level1Code.GDDoorObjects3= [];
gdjs.Level1Code.GDheartObjects1= [];
gdjs.Level1Code.GDheartObjects2= [];
gdjs.Level1Code.GDheartObjects3= [];
gdjs.Level1Code.GDlavaObjects1= [];
gdjs.Level1Code.GDlavaObjects2= [];
gdjs.Level1Code.GDlavaObjects3= [];
gdjs.Level1Code.GDLockObjects1= [];
gdjs.Level1Code.GDLockObjects2= [];
gdjs.Level1Code.GDLockObjects3= [];
gdjs.Level1Code.GDbackground_9595color_9595desertObjects1= [];
gdjs.Level1Code.GDbackground_9595color_9595desertObjects2= [];
gdjs.Level1Code.GDbackground_9595color_9595desertObjects3= [];
gdjs.Level1Code.GD_951064_951080_951087_951099Objects1= [];
gdjs.Level1Code.GD_951064_951080_951087_951099Objects2= [];
gdjs.Level1Code.GD_951064_951080_951087_951099Objects3= [];
gdjs.Level1Code.GDCheckpoint_95952Objects1= [];
gdjs.Level1Code.GDCheckpoint_95952Objects2= [];
gdjs.Level1Code.GDCheckpoint_95952Objects3= [];
gdjs.Level1Code.GDLadderObjects1= [];
gdjs.Level1Code.GDLadderObjects2= [];
gdjs.Level1Code.GDLadderObjects3= [];
gdjs.Level1Code.GDCoinTextObjects1= [];
gdjs.Level1Code.GDCoinTextObjects2= [];
gdjs.Level1Code.GDCoinTextObjects3= [];
gdjs.Level1Code.GDEnemyObjects1= [];
gdjs.Level1Code.GDEnemyObjects2= [];
gdjs.Level1Code.GDEnemyObjects3= [];
gdjs.Level1Code.GDLeftObjects1= [];
gdjs.Level1Code.GDLeftObjects2= [];
gdjs.Level1Code.GDLeftObjects3= [];
gdjs.Level1Code.GDRightObjects1= [];
gdjs.Level1Code.GDRightObjects2= [];
gdjs.Level1Code.GDRightObjects3= [];
gdjs.Level1Code.GDTrophyObjects1= [];
gdjs.Level1Code.GDTrophyObjects2= [];
gdjs.Level1Code.GDTrophyObjects3= [];
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDPlayerObjects3= [];
gdjs.Level1Code.GDFadeObjects1= [];
gdjs.Level1Code.GDFadeObjects2= [];
gdjs.Level1Code.GDFadeObjects3= [];


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level1Code.GDPlayerObjects1, gdjs.Level1Code.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationIndex(5);
}
}
}

}


{

/* Reuse gdjs.Level1Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}
}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GD_9595951064_9595951080_9595951087_9595951099Objects1Objects = Hashtable.newFrom({"Шипы": gdjs.Level1Code.GD_951064_951080_951087_951099Objects1});
gdjs.Level1Code.asyncCallback14951052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setX(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setY(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
}
gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.idToCallbackMap.set(14951052, gdjs.Level1Code.asyncCallback14951052);
gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
for (const obj of gdjs.Level1Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level1Code.asyncCallback14951052(runtimeScene, asyncObjectsList)), 14951052, asyncObjectsList);
}
}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDCheckpoint_959595952Objects1Objects = Hashtable.newFrom({"Checkpoint_2": gdjs.Level1Code.GDCheckpoint_95952Objects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level1Code.GDDoorObjects1});
gdjs.Level1Code.asyncCallback14957748 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level2");
}
gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.idToCallbackMap.set(14957748, gdjs.Level1Code.asyncCallback14957748);
gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Level1Code.asyncCallback14957748(runtimeScene, asyncObjectsList)), 14957748, asyncObjectsList);
}
}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level1Code.GDCoinObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level1Code.GDLeftObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Level1Code.GDRightObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDLockObjects1Objects = Hashtable.newFrom({"Lock": gdjs.Level1Code.GDLockObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level1Code.GDTrophyObjects1});
gdjs.Level1Code.asyncCallback14967548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "End");
}
gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.idToCallbackMap.set(14967548, gdjs.Level1Code.asyncCallback14967548);
gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Level1Code.asyncCallback14967548(runtimeScene, asyncObjectsList)), 14967548, asyncObjectsList);
}
}

}


};gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Hurt") ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(4);
}
}

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Hurt") ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level1Code.GDPlayerObjects1.length !== 0 ? gdjs.Level1Code.GDPlayerObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 10000000, 700, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Шипы"), gdjs.Level1Code.GD_951064_951080_951087_951099Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GD_9595951064_9595951080_9595951087_9595951099Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Health").IsDamageCooldownActive(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Health").Hit(10, true, true, null);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Health").TriggerDamageCooldown(null);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "057874c2aa3912ef6852d95d68884f8bc39b290aa68f461ff3231f760c83858c_Scream 5.aac", false, 100, 1);
}

{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("")));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("")));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "24bfcec8724f47253f3a92730af0752c44c9e47671583a74d7cf2e3cdfcd7dd8_Lovely Piano Song.aac", false, 40, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint_2"), gdjs.Level1Code.GDCheckpoint_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDCheckpoint_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDCheckpoint_95952Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.Level1Code.GDCheckpoint_95952Objects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCheckpoint_95952Objects1[0].getPointX("")));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Level1Code.GDCheckpoint_95952Objects1.length === 0 ) ? 0 :gdjs.Level1Code.GDCheckpoint_95952Objects1[0].getPointY("")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level1Code.GDDisappearPlatformObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].resetTimer("Timer");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level1Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDDisappearPlatformObjects1[k] = gdjs.Level1Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].activateBehavior("Platform", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level1Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") < 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDDisappearPlatformObjects1[k] = gdjs.Level1Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].activateBehavior("Platform", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level1Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") >= 4 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDDisappearPlatformObjects1[k] = gdjs.Level1Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].resetTimer("Timer");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level1Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Level1Code.GDFadeObjects1);
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fading", 255, "linear", 1, false);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].hide();
}
}

{ //Subevents
gdjs.Level1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level1Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.Level1Code.GDCoinTextObjects1);
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Eat");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.Level1Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "c52f1dacc263a2a6dc94e712a2a148f909b73372fa8e0622cb237fdc6a72fd6c_Coins 8.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level1Code.GDLeftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDEnemyObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDLeftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].returnVariable(gdjs.Level1Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level1Code.GDRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDEnemyObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDRightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].returnVariable(gdjs.Level1Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDEnemyObjects1[i].getVariableString(gdjs.Level1Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDEnemyObjects1[k] = gdjs.Level1Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level1Code.GDLeftObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].addForceTowardObject((gdjs.Level1Code.GDLeftObjects1.length !== 0 ? gdjs.Level1Code.GDLeftObjects1[0] : null), 100, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDEnemyObjects1[i].getVariableString(gdjs.Level1Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDEnemyObjects1[k] = gdjs.Level1Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level1Code.GDRightObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].addForceTowardObject((gdjs.Level1Code.GDRightObjects1.length !== 0 ? gdjs.Level1Code.GDRightObjects1[0] : null), 100, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDEnemyObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Health").Hit(100, false, false, null);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setPosition(-(22),512);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "08453f4a9552c67877f233694376e691366199859455e8421c695a6bd4eadf63_Scream 6.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDEnemyObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDEnemyObjects1 */
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lock"), gdjs.Level1Code.GDLockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDLockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDLockObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDLockObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLockObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "7ab074a25f60f44dfb661caff8e5397e3653e25b1ee0d09fd13650317664f087_MetalV2_Jump_Land_02.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level1Code.GDTrophyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDTrophyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Level1Code.GDFadeObjects1);
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fading", 255, "linear", 1, false);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Win");
}
}

{ //Subevents
gdjs.Level1Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDblockObjects1.length = 0;
gdjs.Level1Code.GDblockObjects2.length = 0;
gdjs.Level1Code.GDblockObjects3.length = 0;
gdjs.Level1Code.GDbeeObjects1.length = 0;
gdjs.Level1Code.GDbeeObjects2.length = 0;
gdjs.Level1Code.GDbeeObjects3.length = 0;
gdjs.Level1Code.GDMovingBlockObjects1.length = 0;
gdjs.Level1Code.GDMovingBlockObjects2.length = 0;
gdjs.Level1Code.GDMovingBlockObjects3.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects1.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects2.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects3.length = 0;
gdjs.Level1Code.GDbricksObjects1.length = 0;
gdjs.Level1Code.GDbricksObjects2.length = 0;
gdjs.Level1Code.GDbricksObjects3.length = 0;
gdjs.Level1Code.GDcactusObjects1.length = 0;
gdjs.Level1Code.GDcactusObjects2.length = 0;
gdjs.Level1Code.GDcactusObjects3.length = 0;
gdjs.Level1Code.GDCoinObjects1.length = 0;
gdjs.Level1Code.GDCoinObjects2.length = 0;
gdjs.Level1Code.GDCoinObjects3.length = 0;
gdjs.Level1Code.GDbridgeObjects1.length = 0;
gdjs.Level1Code.GDbridgeObjects2.length = 0;
gdjs.Level1Code.GDbridgeObjects3.length = 0;
gdjs.Level1Code.GDDoorObjects1.length = 0;
gdjs.Level1Code.GDDoorObjects2.length = 0;
gdjs.Level1Code.GDDoorObjects3.length = 0;
gdjs.Level1Code.GDheartObjects1.length = 0;
gdjs.Level1Code.GDheartObjects2.length = 0;
gdjs.Level1Code.GDheartObjects3.length = 0;
gdjs.Level1Code.GDlavaObjects1.length = 0;
gdjs.Level1Code.GDlavaObjects2.length = 0;
gdjs.Level1Code.GDlavaObjects3.length = 0;
gdjs.Level1Code.GDLockObjects1.length = 0;
gdjs.Level1Code.GDLockObjects2.length = 0;
gdjs.Level1Code.GDLockObjects3.length = 0;
gdjs.Level1Code.GDbackground_9595color_9595desertObjects1.length = 0;
gdjs.Level1Code.GDbackground_9595color_9595desertObjects2.length = 0;
gdjs.Level1Code.GDbackground_9595color_9595desertObjects3.length = 0;
gdjs.Level1Code.GD_951064_951080_951087_951099Objects1.length = 0;
gdjs.Level1Code.GD_951064_951080_951087_951099Objects2.length = 0;
gdjs.Level1Code.GD_951064_951080_951087_951099Objects3.length = 0;
gdjs.Level1Code.GDCheckpoint_95952Objects1.length = 0;
gdjs.Level1Code.GDCheckpoint_95952Objects2.length = 0;
gdjs.Level1Code.GDCheckpoint_95952Objects3.length = 0;
gdjs.Level1Code.GDLadderObjects1.length = 0;
gdjs.Level1Code.GDLadderObjects2.length = 0;
gdjs.Level1Code.GDLadderObjects3.length = 0;
gdjs.Level1Code.GDCoinTextObjects1.length = 0;
gdjs.Level1Code.GDCoinTextObjects2.length = 0;
gdjs.Level1Code.GDCoinTextObjects3.length = 0;
gdjs.Level1Code.GDEnemyObjects1.length = 0;
gdjs.Level1Code.GDEnemyObjects2.length = 0;
gdjs.Level1Code.GDEnemyObjects3.length = 0;
gdjs.Level1Code.GDLeftObjects1.length = 0;
gdjs.Level1Code.GDLeftObjects2.length = 0;
gdjs.Level1Code.GDLeftObjects3.length = 0;
gdjs.Level1Code.GDRightObjects1.length = 0;
gdjs.Level1Code.GDRightObjects2.length = 0;
gdjs.Level1Code.GDRightObjects3.length = 0;
gdjs.Level1Code.GDTrophyObjects1.length = 0;
gdjs.Level1Code.GDTrophyObjects2.length = 0;
gdjs.Level1Code.GDTrophyObjects3.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects3.length = 0;
gdjs.Level1Code.GDFadeObjects1.length = 0;
gdjs.Level1Code.GDFadeObjects2.length = 0;
gdjs.Level1Code.GDFadeObjects3.length = 0;

gdjs.Level1Code.eventsList4(runtimeScene);
gdjs.Level1Code.GDblockObjects1.length = 0;
gdjs.Level1Code.GDblockObjects2.length = 0;
gdjs.Level1Code.GDblockObjects3.length = 0;
gdjs.Level1Code.GDbeeObjects1.length = 0;
gdjs.Level1Code.GDbeeObjects2.length = 0;
gdjs.Level1Code.GDbeeObjects3.length = 0;
gdjs.Level1Code.GDMovingBlockObjects1.length = 0;
gdjs.Level1Code.GDMovingBlockObjects2.length = 0;
gdjs.Level1Code.GDMovingBlockObjects3.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects1.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects2.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects3.length = 0;
gdjs.Level1Code.GDbricksObjects1.length = 0;
gdjs.Level1Code.GDbricksObjects2.length = 0;
gdjs.Level1Code.GDbricksObjects3.length = 0;
gdjs.Level1Code.GDcactusObjects1.length = 0;
gdjs.Level1Code.GDcactusObjects2.length = 0;
gdjs.Level1Code.GDcactusObjects3.length = 0;
gdjs.Level1Code.GDCoinObjects1.length = 0;
gdjs.Level1Code.GDCoinObjects2.length = 0;
gdjs.Level1Code.GDCoinObjects3.length = 0;
gdjs.Level1Code.GDbridgeObjects1.length = 0;
gdjs.Level1Code.GDbridgeObjects2.length = 0;
gdjs.Level1Code.GDbridgeObjects3.length = 0;
gdjs.Level1Code.GDDoorObjects1.length = 0;
gdjs.Level1Code.GDDoorObjects2.length = 0;
gdjs.Level1Code.GDDoorObjects3.length = 0;
gdjs.Level1Code.GDheartObjects1.length = 0;
gdjs.Level1Code.GDheartObjects2.length = 0;
gdjs.Level1Code.GDheartObjects3.length = 0;
gdjs.Level1Code.GDlavaObjects1.length = 0;
gdjs.Level1Code.GDlavaObjects2.length = 0;
gdjs.Level1Code.GDlavaObjects3.length = 0;
gdjs.Level1Code.GDLockObjects1.length = 0;
gdjs.Level1Code.GDLockObjects2.length = 0;
gdjs.Level1Code.GDLockObjects3.length = 0;
gdjs.Level1Code.GDbackground_9595color_9595desertObjects1.length = 0;
gdjs.Level1Code.GDbackground_9595color_9595desertObjects2.length = 0;
gdjs.Level1Code.GDbackground_9595color_9595desertObjects3.length = 0;
gdjs.Level1Code.GD_951064_951080_951087_951099Objects1.length = 0;
gdjs.Level1Code.GD_951064_951080_951087_951099Objects2.length = 0;
gdjs.Level1Code.GD_951064_951080_951087_951099Objects3.length = 0;
gdjs.Level1Code.GDCheckpoint_95952Objects1.length = 0;
gdjs.Level1Code.GDCheckpoint_95952Objects2.length = 0;
gdjs.Level1Code.GDCheckpoint_95952Objects3.length = 0;
gdjs.Level1Code.GDLadderObjects1.length = 0;
gdjs.Level1Code.GDLadderObjects2.length = 0;
gdjs.Level1Code.GDLadderObjects3.length = 0;
gdjs.Level1Code.GDCoinTextObjects1.length = 0;
gdjs.Level1Code.GDCoinTextObjects2.length = 0;
gdjs.Level1Code.GDCoinTextObjects3.length = 0;
gdjs.Level1Code.GDEnemyObjects1.length = 0;
gdjs.Level1Code.GDEnemyObjects2.length = 0;
gdjs.Level1Code.GDEnemyObjects3.length = 0;
gdjs.Level1Code.GDLeftObjects1.length = 0;
gdjs.Level1Code.GDLeftObjects2.length = 0;
gdjs.Level1Code.GDLeftObjects3.length = 0;
gdjs.Level1Code.GDRightObjects1.length = 0;
gdjs.Level1Code.GDRightObjects2.length = 0;
gdjs.Level1Code.GDRightObjects3.length = 0;
gdjs.Level1Code.GDTrophyObjects1.length = 0;
gdjs.Level1Code.GDTrophyObjects2.length = 0;
gdjs.Level1Code.GDTrophyObjects3.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects3.length = 0;
gdjs.Level1Code.GDFadeObjects1.length = 0;
gdjs.Level1Code.GDFadeObjects2.length = 0;
gdjs.Level1Code.GDFadeObjects3.length = 0;


return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
