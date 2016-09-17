// CHALLENGES -- THE GAUNTLET HAS BEEN THROWN
// UNLESS NOTED, ALL CHALLENGES SHOULD BE COMPLETED WITH VANILLA
// JAVASCRIPT ONLY
// www.github.com/chriswsh || www.chriswsh.com
//
//
// 1. DRAG-AND-DROP 1
// ------------------
// AGGRAVATION LEVEL: MEH
//
// The more observant may have noticed that this isn't actually a drag-
// and-drop interface. It's a click-and-click interface. Change it.
//
//
// 2. DRAG-AND-DROP 2
// ------------------
// AGGRAVATION LEVEL: NOT TOO BAD ONCE YOU GET USED TO IT
//
// After making this a drag-and-drop interface, it becomes more important
// to cancel the piece move if the drop isn't on a valid target (such as
// outside the game board). Let's do that.
//
//
// 3. SUBTLE UX CONSIDERATIONS
// ---------------------------
// AGGRAVATION LEVEL: NOT TOO BAD ONCE YOU GET USED TO IT
//
// When dragging a piece to the bottom of the browser window, or the far
// right of the browser window, scroll bars appear. For an app like this,
// that's not too big a deal, but it can become a more of a UX issue if
// there was content surrounding it. (Scroll bars appear, line breaks in
// text change to accomodate the new screen width, and from the user's
// perspective the page appears to jump.)
//
// Prevent the scroll bars from appearing.
// 
// For a greater challenge -- and more aggravation -- add some empty space
// to the page and keep scrolling in that direction.
//
//
// 3. GRABBING CURSOR 1
// --------------------
// AGGRAVATION LEVEL: MEH
//
// Using the code at the end of the presentation as-is, the hand cursor
// disappears when the piece is clicked. Fix this.
//
//
// 4. GRABBING CURSOR 2
// --------------------
// AGGRAVATION LEVEL: NOT TOO BAD ONCE YOU GET USED TO IT
//
// After solving GRABBING CURSOR 1, make sure that the hand cursor appears
// throughout the entire browser window (if you haven't already).
//
//
// 5. GRABBING CURSOR 3
// --------------------
// AGGRAVATION LEVEL: NOT TOO BAD ONCE YOU GET USED TO IT
//
// When a piece is being moved, change the cursor to a "grabbed" cursor in
// your preferred browser.
//
//
// 6. GRABBING CURSOR 4
// --------------------
// AGGRAVATION LEVEL: (╯°□°)╯︵ ┻━┻
//
// Make the solutions to all GRABBING CURSOR challenges work in all
// common browsers. (This is why frameworks, shims and polyfills were
// invented.)
//
//
// 7. EXPANDED FUNCTIONALITY 1 (FRAMEWORKS ALLOWED)
// ------------------------------------------------
// AGGRAVATION LEVEL: MEH
//
// Expand the chessboard to full size, with a full set of pieces.
//
//
// 8. EXPANDED FUNCTIONALITY 2 (FRAMEWORKS ALLOWED)
// ------------------------------------------------
// AGGRAVATION LEVEL: NOT TOO BAD ONCE YOU GET USED TO IT
//
// Add capture functionality. When one piece lands on another, that's a
// capture. (You don't have to keep track of captured pieces. Yet.)
//
//
// 9. EXPANDED FUNCTIONALITY 3 (FRAMEWORKS ALLOWED)
// ------------------------------------------------
// AGGRAVATION LEVEL: NOT TOO BAD ONCE YOU GET USED TO IT
//
// Allow the user to reset the board and flip the board view.
//
//
// 9. EXPANDED FUNCTIONALITY 4 (FRAMEWORKS ALLOWED)
// ------------------------------------------------
// AGGRAVATION LEVEL WITH FRAMEWORKS: ANNOYING
// AGGRAVATION LEVEL WITHOUT FRAMEWORKS:
// (╯°□°)╯︵ ┻━┻      (╯'□')╯︵ ┻━┻      ┬─┬ ︵ /(,□, \)
//
// Now, give the user an intuitive way to put captured pieces back on
// the board.
//
// Congratulations! After completing all 9 challenges, you've not only
// created a minimum viable front-end for a chess app, but gained XP
// with vanilla JS skills that you can use to troubleshoot framework
// bugs (or branch out on your own if a framework doesn't do something
// you need it to).
//
// ┬─┬ ノ( ゜-゜ノ)
//
// Creating game interfaces are often more involved than what you could
// expect to do in most web apps. Even simple ones require solid skills.
// Polish up the code, make sure it's commented well, then put it on
// your Github account/online profile. You've earned it!

// ======================================================================

// This code has been tested on Chrome builds from 9/1/16 to 9/17/16
// and Microsoft Edge 38.14393.0.0. It uses new ES6 features (const and
// let), so it requires a browser that implements those.

// ======================================================================

// Currently commented out so that is doesn't bork the closure discussion.
// "use strict";
function init() {
    // Confirm DOM is ready
    console.log(document.readyState);
    
    
    // _PHASE = 0 for logging of event capturing and bubbling
    // _PHASE = 1 for interface functionality
    const _PHASE = 0;
    
    // Declaring variables here in order to play well with strict mode.
    var _selectedPiece = null;
    var _elements = null;
    
    switch (_PHASE) {
        // =================================
        // Event Capturing and Bubbling with
        // event.stopPropagation();
        // =================================
        case 0:
            // Add click events to window
            window.addEventListener(`click`, function(event){
                console.log(`Window Clicked - Capture`);
            }, true);
            window.addEventListener(`click`, function(event){
                console.log(`Window Clicked - Bubble`);
            });

            // Add click events to <body>
            document.body.addEventListener(`click`, function(event){
                console.log(`Body Clicked - Capture`);
                // event.stopPropagation();
           }, true);
            document.body.addEventListener(`click`, function(event){
                console.log(`Body Clicked - Bubble`);
            });

            // Add click events to table <td class="board">
            _elements = document.getElementsByClassName(`board`);
            for (let i = 0; i < _elements.length; i++) {        
                _elements[i].addEventListener(`click`, function(event) {
                    console.log(`Table Clicked - Capture`);
                }, true);

                _elements[i].addEventListener(`click`, function(event) {
                    console.log(`Table Clicked - Bubble`);
                });
            }

            // Add click events to table rows <tr class="table-row">
            _elements = document.getElementsByClassName(`table-row`);
            for (let i = 0; i < _elements.length; i++) {        
                _elements[i].addEventListener(`click`, function(event) {
                    console.log(`TR Clicked - Capture`);
                }, true);

                _elements[i].addEventListener(`click`, function(event) {
                    console.log(`TR Clicked - Bubble`);
                });
            }

            // Add click events to table cells <td class="square">
            _elements = document.getElementsByClassName(`square`);
            for (let i = 0; i < _elements.length; i++) {        
                _elements[i].addEventListener(`click`, function(event) {
                    console.log(`TD Clicked - Capture`);
                }, true);

                _elements[i].addEventListener(`click`, function(event) {
                    console.log(`TD Clicked - Bubble`);
                });
            }

            // Add click events to pieces div <div class="piece">
            _elements = document.getElementsByClassName(`piece`);
            for (let i = 0; i < _elements.length; i++) {
                _elements[i].addEventListener(`click`, function (event) {
                    console.log(`Piece Clicked - Capture`);
                }, true);

                _elements[i].addEventListener(`click`, function (event) {
                    console.log(`Piece Clicked - Bubble`);
                    // event.stopPropagation();
                });
            }

            // Add click events to glyphicon span <span class="glyphicon">
            _elements = document.getElementsByClassName(`glyphicon`);
            for (let i = 0; i < _elements.length; i++) {
                _elements[i].addEventListener(`click`, function (event) {
                    console.log(`GlyphIcon Clicked - Capture`);
                }, true);

                _elements[i].addEventListener(`click`, function (event) {
                    console.log(`GlyphIcon Clicked - Bubble`);
                    // event.stopPropagation();
                });
            }               
            break;

        
        // ====================================
        // Moving a piece after it's clicked on
        // ====================================        
        case 1:
            // Add click event to pieces <div class="piece">        
            _elements = document.getElementsByClassName(`piece`);
            for (let i = 0; i < _elements.length; i++) {
                // Examining JavaScript closures
                // console.log(i); 
                _elements[i].addEventListener(`click`, function (event) {
                    // Lets see what we have to work with
                    console.info(`Piece Clicked`);
                    console.log(event);

/*
                    // Will not work due to reasons that are important to understand - technical term is closures
                    _selectedPiece = _elements[i]; 
*/

/*
                    // Find the DIV that we want to move -- it won't always be event.target.
                    // The target will often be the span.
                    // This works in Google Chrome, but not Microsoft Edge.
                    let j = 0;
                    while (event.path[j].className.indexOf(`piece`) === -1) {
                        j++;
                    }
                    _selectedPiece = event.path[j]; // Store the clicked piece in a variable so we can work with it later
*/

/*
                    // Cross-browser version of above (fingers crossed)
                    _selectedPiece = event.target;
                    while (_selectedPiece.className.indexOf(`piece`) === -1) {
                        _selectedPiece = _selectedPiece.parentNode;
                    }
*/

                    // Faster, but can be harder to debug and is not as instructive about the event object
                    _selectedPiece = this;

/*
                    console.info(`SELECTED PIECE: `)
                    console.log(_selectedPiece);
                    console.log(``);
*/

                    // Make the positioning of the DIV absolute, and center it on the mouse
                    _selectedPiece.style.position = `absolute`;
                    _selectedPiece.style.left = event.pageX - parseInt(_selectedPiece.offsetWidth / 2) + `px`;
                    _selectedPiece.style.top = event.pageY - parseInt(_selectedPiece.offsetHeight / 2) + `px`;

/*
                    // Make the grabbed DIV transparent to mouse clicks
                    _selectedPiece.style.pointerEvents = `none`;
*/

/*
                    // Stop propagation so that the TD click event doesn't fire on bubble.
                    // This is risky if there are event listeners further up the chain, a.k.a. other people's code
                    // Alternatively, we could assign the TD click event to the capture side of the flow, not the bubble
                    // side, which is cleaner.
                    event.stopPropagation();
*/
                });
            }

            // Add mousemove event to the body - one listener overall, instead of one listener per piece.
            // This works because there's only one piece that will move at a time, and because you can
            // assign multiple listeners to the same event (if we wanted the webpage to do something on click
            // even when a piece has been grabbed).
            document.addEventListener(`mousemove`, function(event) {
                // If there is a selected piece, make it stick to the mouse cursor.
                if (_selectedPiece) {
                    let finalX = event.pageX - parseInt(_selectedPiece.offsetWidth / 2);
                    let finalY = event.pageY - parseInt(_selectedPiece.offsetHeight / 2);
                    _selectedPiece.style.left = finalX + `px`;
                    _selectedPiece.style.top = finalY + `px`;             
                }
            });

/*
            // Add click event to table cells <td class="square">
            _elements = document.getElementsByClassName(`square`);
            for (let i = 0; i < _elements.length; i++) {        
                _elements[i].addEventListener(`click`, function(event) {
                    // _elements[i].id will work here in Chrome...and that's when you start to go crazy.
                    // Working idea - optimization condenses _elements[i].id to a literal before function storage.
                    console.log(`TD Clicked: ` + this.id);

                    // If a piece is currently selected, place it in new home
                    if (_selectedPiece) {
                        console.log(`Placing Piece`);                
                        this.appendChild(_selectedPiece);
                        // A static position overrides left and top values, so we can leave those there to look up
                        // later, if needed. But be careful. It's easy to lose track when you store things data in
                        // CSS like this.
                        _selectedPiece.style.position = `static`;
                        _selectedPiece.style.pointerEvents = `auto`;
                        _selectedPiece = null;
                    }
                });
            }
*/

/*
            console.info(`value of i after init() finishes: `);
            console.info(i);
*/

    }
}
