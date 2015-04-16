"use strict";

angular.module('gordonApp')

.service('audioService', function() {

    return function(msg) {

        var nums = msg.split("");

        var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

        var channel = 0;
        // create web audio api context

        // set options for the oscillator

        function playTone() {
            // create Oscillator and gain node
            var oscillator = audioCtx.createOscillator();
            var gainNode = audioCtx.createGain();

            var num = nums[channel].charCodeAt(0);
            console.log(num);
            gainNode.gain.value = 0.005;
            // connect oscillator to gain node to speakers

            oscillator.type = 'square';//square, sine, sawtooth, triangle, custom
            oscillator.frequency.value = num * 10; // value in hertz

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.detune.value = 100; // value in cents
            oscillator.start();

            var end = setTimeout(function() {
                oscillator.stop();
                channel++;
                if (channel < nums.length) playTone();
            }, 50);
        }

        playTone(0);
    }

});
