import React from 'react';

function About() {
    return <div>
        
        <div class="container mx-2 px-2">
        <p class="text-light">The objective of the game is to find a random Word!</p>
        <p class="text-light">Press New Word to generate a random word</p>
        <p class="text-light">Use the buttons to input your letters</p>
            <div class="row">
                <div class="col-sm-auto px-1">
                    <p class="text-light">A </p>
                </div>
                <div class="col-sm-auto px-1">

                    <p class="text-success"> GREEN </p>

                </div>
                <div class="col-sm-auto px-1">
                    <p class="text-light">Letter means youve found a correct letter!</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-auto px-1">
                    <p class="text-light">A </p>
                </div>
                <div class="col-sm-auto px-1">
                    <p class="text-danger"> RED </p>
                </div>
                <div class="col-sm-auto px-1">
                    <p class="text-light">Letter means youve found a INCORRECT letter!</p>
                </div>

            </div>
            <p class="text-light">match all letters to win!</p>
        </div>



        
    </div>;
}

export default About;
