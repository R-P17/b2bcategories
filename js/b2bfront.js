/*jQuery(document).ready(function(){
*/
	//console.log("b2bfront.js script is running"); // Ελέγχουμε ότι το script εκτελείται

	//jQuery("#menu-item-23").click(function(){
  //alert("The paragraph was clicked.");
//});
	/*jQuery('a').click(function(){
		alert('testing');
	});
*/
/*jQuery('body').append(`
	<div id="open">
		testtt
	</div>
	`
	);*/
/*jQuery("#menu-item-23").click(function(){
	jQuery("#newww").html("<h2>tttttt</h2>");
});

<div id="newww"></div>*/


// Αυτόματα, αν ο χρήστης είναι στη σελίδα της κατηγορίας b2b, θα εμφανίζεται το popup
    /*if (window.location.href.indexOf('b2b') !== -1) { // Ελέγχουμε αν είμαστε στην κατηγορία b2b
        jQuery('body').append(`
            <div id="b2b-popup" style="display:none;">
                <div class="popup-content">
                    <h2>Κωδικός Πρόσβασης</h2>
                    <label for="access-code">Εισάγετε τον κωδικό πρόσβασης:</label>
                    <input type="password" id="access-code" placeholder="Κωδικός πρόσβασης" />
                    <button id="submit-code">Εισάγετε</button>
                    <button id="close-popup">Κλείσιμο</button>
                </div>
            </div>
        `);*/

        // Προβολή του popup
        /*jQuery('#b2b-popup').fadeIn();*/

        // Όταν κλείσει το popup
        /*jQuery('#close-popup').click(function() {
            jQuery('#b2b-popup').fadeOut();
        });*/

        // Όταν ο χρήστης υποβάλει τον κωδικό
        /*jQuery('#submit-code').click(function() {
            var code = jQuery('#access-code').val();
            if (code === 'correct-password') { // Αν ο κωδικός είναι σωστός
                jQuery('#b2b-popup').fadeOut();
                // Επιτρέπουμε την πλοήγηση στη σελίδα
                window.location.href = window.location.href;
            } else {
                alert('Ο κωδικός είναι λανθασμένος!');
            }
        });*/






 /*       // Εντοπίζουμε το link που έχει `data-category="b2b"`
    jQuery(document).on("click","a[data-category='b2b']", function(event) {
        event.preventDefault(); // Αποτρέπουμε την πλοήγηση
        console.log("Το link της κατηγορίας b2b εντοπίστηκε, και η πλοήγηση αποτράπηκε.");
        
        // Εμφανίζουμε το popup
        jQuery('body').append(`
            <div id="b2b-popup">
                <div class="popup-content">
                    <h2>Πρόσβαση στην κατηγορία B2B</h2>
                    <label for="username">Όνομα χρήστη:</label>
                    <input type="text" id="username" placeholder="Όνομα χρήστη" />
                    <label for="password">Κωδικός πρόσβασης:</label>
                    <input type="password" id="password" placeholder="Κωδικός πρόσβασης" />
                    <button id="submit-login">Είσοδος</button>
                    <button id="close-popup">Κλείσιμο</button>
                </div>
            </div>
        `);

        // Στυλ για να εμφανίζεται το popup
        jQuery('#b2b-popup').fadeIn();

        // Κλείσιμο του popup
        jQuery('#close-popup').click(function() {
            jQuery('#b2b-popup').fadeOut(function() {
                jQuery(this).remove();
            });
        });

        // Υποβολή διαπιστευτηρίων
        jQuery('#submit-login').click(function() {
            var username = jQuery('#username').val();
            var password = jQuery('#password').val();

            // Απλή σύγκριση διαπιστευτηρίων (για παράδειγμα)
            if (username === 'your-username' && password === 'your-password') { // Αν είναι σωστά
                window.location.href = "/product-category/b2b"; // Ανακατεύθυνση στη σελίδα κατηγορίας `b2b`
            } else {
                alert('Λανθασμένα διαπιστευτήρια. Παρακαλώ δοκιμάστε ξανά.');
            }
        });
    });
    
});*/
console.log("το js φορτώθηκε επιτυχώς");
jQuery(document).ready(function() {
    // Εντοπίζουμε το link που έχει `data-category="b2b"`
    jQuery("a[data-category='b2b']").click(function(event) {
    	//jQuery('body').one("click",function(){
        event.preventDefault(); // Αποτρέπουμε την πλοήγηση
        console.log("το popup, φορτώθηκε επιτυχώς");
        
        // Εμφανίζουμε το popup
        //jQuery('body').append(`
       	//αυτο δε μας χρειαζεται
       	jQuery('body').one("click",function(){
       	//θα καρτ΄΄ησουμε αυτό και να δοκιμάσω να το κάνω με css style, για να πιανει το background ήπως και γίνει κάτι	
        jQuery(this).html(`
            <div id="b2b-popup">
                <div class="popup-content" style="">
                    <h2>Πρόσβαση στην κατηγορία B2B</h2>
                    <label for="username">Όνομα χρήστη:</label>
                    <input type="text" id="username" placeholder="Όνομα χρήστη" />
                    <label for="password">Κωδικός πρόσβασης:</label>
                    <input type="password" id="password" placeholder="Κωδικός πρόσβασης" />
                    <button id="submit-login">Είσοδος</button>
                    <button id="close-popup">Κλείσιμο</button>
                </div>
            </div>
        `);

        // Στυλ για να εμφανίζεται το popup
        jQuery('#b2b-popup').fadeIn();

        // Κλείσιμο του popup
        jQuery('#close-popup').click(function() {
            /*jQuery('#b2b-popup').fadeOut(function() {
                jQuery('this').remove();
                console.log('το κουμπί πατήθηκε')
            });*/
            location.reload();
        });

        
        // Υποβολή διαπιστευτηρίων
        jQuery('#submit-login').click(function() {
            var username = jQuery('#username').val();
            var password = jQuery('#password').val();

            
            

            // Απλή σύγκριση διαπιστευτηρίων (για παράδειγμα)
            //if (username === 'user' && password === 'pass') { // Αν είναι σωστά

            	jQuery.ajax({
        	type:"POST",
        	url:"http://testplugin.test/wp-content/plugins/b2bcategories/b2blogin.php",
        	
        	// data:dataString,
        	data: {
        username: username, // από το input πεδίο
        password: password  // από το input πεδίο
    },
        	success:function(){
        		console.log('check');
        	}
        });
                // window.location.href = "/product-category/b2b"; // Ανακατεύθυνση στη σελίδα κατηγορίας `b2b`
            //} //else {
                //alert('Λανθασμένα διαπιστευτήρια. Παρακαλώ δοκιμάστε ξανά.');
            //}
        });

        
    });
});
});