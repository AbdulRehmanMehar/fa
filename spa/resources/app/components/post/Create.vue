<template>
	<div class="central-meta postbox">
		<span class="create-post">Create post</span>
		<div class="new-postbox">
			<figure>
				<img src="/static/images/resources/admin.jpg" alt="">
			</figure>
			<div class="newpst-input">
				<form method="post">
					<textarea rows="2" placeholder="Share some what you are thinking?"></textarea>
				</form>
			</div>
			<div class="attachments">
				<ul>
					<li>
													<span class="add-loc">
														<i class="fa fa-map-marker"></i>
													</span>
					</li>
					<li>
						<i class="fa fa-music"></i>
						<label class="fileContainer">
							<input type="file">
						</label>
					</li>
					<li>
						<i class="fa fa-image"></i>
						<label class="fileContainer">
							<input type="file">
						</label>
					</li>
					<li>
						<i class="fa fa-video-camera"></i>
						<label class="fileContainer">
							<input type="file">
						</label>
					</li>
					<li>
						<i class="fa fa-camera"></i>
						<label class="fileContainer">
							<input type="file">
						</label>
					</li>
					<li class="preview-btn">
						<button class="post-btn-preview" type="submit" data-ripple="">Preview</button>
					</li>
				</ul>
				<button class="post-btn" type="submit" data-ripple="">Post<span class="ripple"><span class="ink" style="height: 433px; width: 433px; background-color: rgb(42, 252, 255); top: -203.625px; left: 88px;"></span></span></button>
			</div>
			<div class="add-location-post">
				<span>Drag map point to selected area</span>
				<div class="row">

					<div class="col-lg-6">
						<label class="control-label">Lat :</label>
						<input type="text" class="" id="us3-lat">
					</div>
					<div class="col-lg-6">
						<label>Long :</label>
						<input type="text" class="" id="us3-lon">
					</div>
				</div>
				<!-- map -->
				<div id="us3" style="position: relative; overflow: hidden;"><div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);"><div style="overflow: hidden;"></div><div class="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;"><div tabindex="0" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;), default; touch-action: pan-x pan-y;"><div style="z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);"><div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;"><div style="position: absolute; left: 0px; top: 0px; z-index: 0;"><div style="position: absolute; z-index: 985; transform: matrix(1, 0, 0, 1, -244, -53);"><div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;"><div style="width: 256px; height: 256px;"></div></div></div></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;"><div style="position: absolute; left: 0px; top: 0px; z-index: -1;"><div style="position: absolute; z-index: 985; transform: matrix(1, 0, 0, 1, -244, -53);"><div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 0px;"></div></div></div><div style="width: 27px; height: 43px; overflow: hidden; position: absolute; left: -14px; top: -43px; z-index: 0;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 27px; height: 43px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 0;"></div></div><div class="gm-style-pbc" style="z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;"><p class="gm-style-pbt"></p></div><div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"><div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);"><div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div><div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"><div style="width: 27px; height: 43px; overflow: hidden; position: absolute; opacity: 0.0001; touch-action: none; left: -14px; top: -43px; z-index: 0;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png" draggable="false" usemap="#gmimap0" style="position: absolute; left: 0px; top: 0px; width: 27px; height: 43px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"><map name="gmimap0" id="gmimap0"><area log="miw" coords="13.5,0,4,3.75,0,13.5,13.5,43,27,13.5,23,3.75" shape="poly" tabindex="-1" title="Drag Me" style="cursor: pointer; touch-action: none;"></map></div></div><div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div></div></div></div><iframe aria-hidden="true" frameborder="0" tabindex="-1" style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none;"></iframe></div></div></div>
			</div>
		</div>

	</div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: 'Create',
})
</script>

