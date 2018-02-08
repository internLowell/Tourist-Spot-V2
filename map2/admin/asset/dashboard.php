<div class="dashboard">
	<button class="command-button fg-white bg-blue text-shadow" onclick="toggleMetroCharm('#placesPanel')">
	    <span class="icon mif-location"></span>
	    Places
	    <small>Manage Tourist Spots :: View, Add, Edit, or Delete</small>
	</button>
	<button class="command-button icon-right fg-white bg-green text-shadow" onclick="toggleMetroCharm('#accountDialog')">
	    <span class="icon mif-user"></span>
	    My Account
	    <small>Use this option to modify your account information</small>
	</button>
	<button class="command-button fg-white bg-orange text-shadow" onclick="toggleMetroCharm('#configCharm');">
	    <span class="icon mif-apps"></span>
	    Configuration
	    <small>Application Settings</small>
	</button>
	<button class="command-button icon-right fg-white bg-red text-shadow">
	    <span class="icon mif-exit"></span>
	    Log out
	    <small>Sign out account</small>
	</button>
</div>
<div id="placesPanel" 
	 class="bg-blue fg-white" 
	 data-role="charm"
	 data-position="top">
	<div class="charm-full">	
		<h1>Places</h1>
		<table class="p-tbl fg-dark bg-blue data-table sortable-markers-on-left" data-role="datatable" data-searching="true">
		    <thead>
		        <tr>
		            <th class="sortable-column">Name</th>
		            <th class="sortable-column">Lat</th>
		            <th class="sortable-column">Lng</th>
		        </tr>
		    </thead>
		    <tbody>
		    	<tr>
			    	<td>A Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>B Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>C Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>D Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>E Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>F Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>G Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>H Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>I Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>J Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>K Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>L Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    	<tr>
			    	<td>M Sample</td>
			    	<td>123456</td>
			    	<td>789012</td>
			    </tr>
		    </tbody>
		</table>
	</div>
</div>
<div id="accountDialog"
	 data-role="charm"
	 data-position="left"
	 class="bg-green">
	<div class="window success atTop" id="accWindow" style="margin-top: 10px;">
        <div class="window-caption">
            <span class="window-caption-icon"><span class="mif-user"></span></span>
            <span class="window-caption-title">My Account</span>
        </div>
        <div class="window-content fg-dark">
            <div class="padding20">
            	<div class="input-control text">
				    <label>Username</label>
				    <span class="mif-user prepend-icon"></span>
				    <input type="text">
				</div>
				<div class="input-control password">
				    <label>Current Password</label>
				    <span class="mif-key prepend-icon"></span>
				    <input type="password">
				</div>
				<form>
					<div class="accordion" data-role="accordion">
					    <div class="frame">
					        <div class="heading">Modify <span class="mif-cog icon"></span></div>
					        <div class="content shadow">
					        	<div class="input-control text">
								    <label>New Username</label>
								    <span class="mif-profile prepend-icon"></span>
								    <input type="text">
								</div>
								<div class="input-control password">
								    <label>New Password</label>
								    <span class="mif-key prepend-icon"></span>
								    <input type="password">
								</div>
								<div class="input-control password">
								    <label>Retype Password</label>
								    <span class="mif-link prepend-icon"></span>
								    <input type="password">
								</div>
								<input class="primary" type="submit" name="account-btn" value="save">
					        </div>
					    </div>
					</div>
				</form>
            </div>
        </div>
    </div>
</div>
<div id="configCharm" class="bg-orange" data-role="charm" data-position="bottom">
    <div style="height: 98vh; overflow: auto">
    	<h1>Configuration</h1>
    	<form>
			<div class="input-control textarea"
			    data-role="input" data-text-auto-resize="true">
			    <p>App Description</p>
			    <textarea></textarea>
			</div>	
			<div class="input-control input"
			    data-role="input" data-text-auto-resize="true">
			    <p>Author</p>
			    <input type="text">
			</div>
			<div class="input-control textarea"
			    data-role="input" data-text-auto-resize="true"><br>
			    <p>Instruction</p>
			    <textarea></textarea>
			</div>		
			<button  class="button large-button bg-grayLight fg-white text-shadow" type="submit" name="config-btn"><span class="mif-floppy-disk"></span> Save</button>
    	</form>
    </div>
</div>