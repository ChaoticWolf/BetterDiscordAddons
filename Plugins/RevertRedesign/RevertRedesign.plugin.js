/**
 * @name RevertRedesign
 * @author ChaoticWolf
 * @description Revert the new Discord redesign
 * @version 1.0
 */
 
function ToggleRedesign(setting) {
	BdApi.Webpack.getModule(x=>x.ZP.updatedUnsyncedSettings).ZP.updatedUnsyncedSettings({disableVisualRefresh: setting});
}

module.exports = class RevertRedesign {
	start() {
		new ToggleRedesign(1);
	}
	
	stop() {
		new ToggleRedesign(0);
	}
};