/* 
* @Author: 张秋月
* @Date:   2018-05-15 15:07:41
* @Last Modified by:   张秋月
* @Last Modified time: 2018-05-15 15:08:16
*/

window.onload = function () {
						var oNav = document.getElementById('uu');
						var oli = oNav.getElementsByTagName('li');
						
						


						
						
						for(var i=0;i<oli.length;i++){
							
						


							oli[i].onclick = function () {

								
								for(var j=0;j<oli.length;j++){
									oli[j].className = '';

									
								}
								this.className = 'active';
								
								
							}			
						}		
					}


