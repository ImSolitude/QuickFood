/*global console, alert, confirm, prompts*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
*/
$(document).ready(function() {

    var $wrapper = $('.wrapper'),
        $main = $('section.main');
        $next = $('.next');
        $prev = $('.prev');


    $('.minus').on('click', function() {
        $currActive = $wrapper.find('.active');
        if(parseFloat($currActive.find('.count').text()) === 0) {
            return;
        } else {
            $currActive.find('.count').text($currActive.find('.count').text() - 1);
        }
    });

    $('.plus').on('click', function() {
        $currActive = $wrapper.find('.active');
        $currActive.find('.count').text(parseFloat($currActive.find('.count').text()) + 1);
    });

    $('.btn-def').on('click', function() {
        $currActive = $wrapper.find('.active');
        var old = parseInt($('.navbar-right .cart-count').text(), 10);
        var val = parseInt($currActive.find('.count').text(), 10);
        $('.cart-count').text(val + old );
    });


    $('.control').on('click', function(e) {
        $this = $(this),
        $currActive = $wrapper.find('.active'),
        $position = $wrapper.children().index($currActive),
        $mainNum = $('.main').length;


        if($this.hasClass('next')) {
                    if($position < $mainNum - 1 ) {
                        $('.main').css({
                            ' -webkit-animation': 'animation 1000ms linear both',
                            'animation': 'animation 1000ms linear both'
                        });

                        $('.active').removeClass('active').next().addClass('active');
                    } else {
                        $('.main').css({
                            ' -webkit-animation': 'animation 1000ms linear both',
                            'animation': 'animation 1000ms linear both'
                        });
                        $('.main').removeClass('active').first().addClass('active');
                    }
                } else {
                    $('.main').css({
                        ' -webkit-animation': 'animation2 1000ms linear both',
                        'animation': 'animation2 1000ms linear both'
                    });

                    if( $position === 0 ) {

                        $('.main').removeClass('active').last().addClass('active');
                    } else {
                        $('.active').removeClass('active').prev().addClass('active');
                    }

                }

                updateIcons();


    });

    function updateIcons() {
        var nextImg = $('.active').next().find('img').attr('src'),
        nextColor = $('.active').next().css('background-color');

        var prevImg = $('.active').prev().find('img').attr('src'),
        prevColor = $('.active').prev().css('background-color');


        var firstImg = $('.main').first().find('img').attr('src'),
        firstColor =  $('.main').first().css('background-color');

        var lastImg = $('.main').last().find('img').attr('src'),
        lastColor = $('.main').last().css('background-color');


        var $active = $wrapper.find('.active');
        var $activeColor = $active.css('background-color');
        var $position = $wrapper.children().index($active);
        var $mainNum = $('.main').length;


        if ($position === $mainNum - 1) {
            // we are last
            $prev.find('img').attr('src', prevImg);
            $next.find('img').attr('src', firstImg);

            $next.find('.quarter-circle').css({
                'background-color': firstColor,
                'border-color': $activeColor.replace(')', ', 0.5)').replace('rgb', 'rgba')
            });
            $prev.find('.quarter-circle').css({
                'background-color': prevColor,
                'border-color': $activeColor.replace(')', ', 0.5)').replace('rgb', 'rgba')
            });

        } else if ($position === 0){
            // we are first
            $next.find('img').attr('src', nextImg);
            $prev.find('img').attr('src', lastImg);

            $next.find('.quarter-circle').css({
                'background-color': nextColor,
                'border-color': $activeColor.replace(')', ', 0.5)').replace('rgb', 'rgba')
            });
            $prev.find('.quarter-circle').css({
                'background-color': lastColor,
                'border-color': $activeColor.replace(')', ', 0.5)').replace('rgb', 'rgba')
            });
        } else {
            // we are middle
            $next.find('img').attr('src', nextImg);
            $prev.find('img').attr('src', prevImg);

            $next.find('.quarter-circle').css({
                'background-color': nextColor,
                'border-color': $activeColor.replace(')', ', 0.5)').replace('rgb', 'rgba')
            });

            $prev.find('.quarter-circle').css({
                'background-color': prevColor,
                'border-color': $activeColor.replace(')', ', 0.5)').replace('rgb', 'rgba')
            });
        }
    }

});
