(function($) {

    var controller = new ScrollMagic.Controller();

    function Animation() {
        this.header();
        this.section();
        this.pricing();
    }

    Animation.prototype.header = function() {

        var content = $('.quote .content');
        var colors = ["#1abc9c", "#f1c40f", "#e67e22", "#34495e"];

        var tween = new TimelineMax();

        for(var i = 1; i < content.length; i++) {
            tween.from($(content[i]), .5, {
                opacity: 0,
                visibility: 'hidden'
            });
            tween.to($(content[i-1]), .5, {
                opacity: 0,
                visibility: 'hidden'
            });
            tween.to($('#header'), .5, {backgroundColor: colors[Math.round(Math.random() * colors.length)]})
        }

        new ScrollMagic.Scene({
            triggerElement: '#header',
            triggerHook: 0,
            duration: '150%'
        })
        .setTween(tween)
        .setPin('#header')
        .addTo(controller);
        
    }

    Animation.prototype.section = function() {

        var sections = ["#section-01", "#section-02", "#section-03"]

        for(var i = 0; i < sections.length; i++) {
            var tween = new TimelineMax();
            tween.staggerFrom($(sections[i]).find("li"), 1, {opacity: 0, y: -20}, 0.5)

            new ScrollMagic.Scene({
                triggerElement: sections[i],
                triggerHook: 0,
                duration: '100%'
            })
            .setTween(tween)
            .setPin(sections[i])
            .addTo(controller)
        }
    }
    
    Animation.prototype.pricing = function() {
        var colors = ["#1abc9c", "#f1c40f", "#e67e22", "#34495e"];

        var tween = new TimelineMax();
            tween.to($('#section-04'), .5, {backgroundColor: colors[Math.round(Math.random() * colors.length)]})

            new ScrollMagic.Scene({
                triggerElement: "#section-04",
                triggerHook: 0,
                duration: '200%'
            })
            .setTween(tween)
            .setPin("#section-04")
            .addTo(controller)
    }

    new Animation();


})(jQuery)