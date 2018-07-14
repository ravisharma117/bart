$(document).ready(function() {	 
					
					// general settings
					var s = { sndpath: "images/bart/", // path to sound files
						showpumpcount: true,
						balloon: { popprob: 13, increment: .013, earnings: 0.02},
						onload:    function() { $('#os').hide(); },  // hide submit button on the page
						onend:     function() { 
							$('#os').show();  // show submit button 
							$('#bart').parents('form:first').submit(); // submit page
						},
						frmid: 'v_61',
						frmids_pumps:    ['v_1','v_2','v_3','v_4','v_5','v_6','v_7','v_8','v_9','v_10',
						'v_11','v_12','v_13','v_14','v_15','v_16','v_17','v_18','v_19','v_20',
						'v_21','v_22','v_23','v_24','v_25','v_26','v_27','v_28','v_29','v_30'],
						frmids_exploded: ['v_31','v_32','v_33','v_34','v_35','v_36','v_37','v_38','v_39','v_40',
						'v_41','v_42','v_43','v_44','v_45','v_46','v_47','v_48','v_49','v_50',
					'v_51','v_52','v_53','v_54','v_55','v_56','v_57','v_58','v_59','v_60'] };
					
					// define different types of balloons
					var b = [ { b:10, o: { color: '#FF0000'} } ]; // 5 blue balloons
					/*var b = [ { b:10, o: { color: '#FF0000'} },   // 5 red balloons
					{ b:5, o: { color: '#0000FF'} } ]; // 5 blue balloons*/
					// initialize the BART with the defined settings
					$("#bart").bart(  {s:s, b:b}  );
					
				});
				
		