var tlMaster = new TimelineMax({repeat:-1});

tlMaster
    .to("#lego-one", 0.4, {x: -70,y:-70, ease:Power4.easeInOut}, "slide_one+=0.0")
    .set("#lego-one", {css:{zIndex:75}}, "slide_one+=0.4")
    .to("#lego-two", 0.4, {x: -70,y:70, ease:Power4.easeInOut}, "slide_one+=0.4")
    .to("#lego-three", 0.4, {x: -70,y:70, ease:Power4.easeInOut}, "slide_one+=0.5")

    .to("#lego-five", 0.4, {x: 70,y:70, ease:Power4.easeInOut}, "slide_two+=0.0")
    .set("#lego-five", {css:{zIndex:75}}, "slide_two+=0.4")
    .to("#lego-four", 0.4, {x: 70,y:-70, ease:Power4.easeInOut}, "slide_two+=0.4")
    .to("#lego-one", 0.4, {x: 0,y:-140, ease:Power4.easeInOut}, "slide_two+=0.5")

    .to("#lego-two", 0.4, {x: -140,y:-0, ease:Power4.easeInOut}, "slide_three+=0.0")
    .set("#lego-two", {css:{zIndex:75}}, "slide_three+=0.4")
    .to("#lego-three", 0.4, {x: -140,y:140, ease:Power4.easeInOut}, "slide_three+=0.4")
    .to("#lego-five", 0.4, {x: 0,y:140, ease:Power4.easeInOut}, "slide_three+=0.5")

    .to("#lego-four", 0.4, {x: 140,y:0, ease:Power4.easeInOut}, "slide_four+=0.0")
    .set("#lego-four", {css:{zIndex:75}}, "slide_four+=0.4")
    .to("#lego-one", 0.4, {x: 70,y:-210, ease:Power4.easeInOut}, "slide_four+=0.4")
    .to("#lego-two", 0.4, {x: -70,y:-70, ease:Power4.easeInOut}, "slide_four+=0.5")

    .to("#lego-three", 0.4, {x: -210,y:70, ease:Power4.easeInOut}, "slide_five+=0.0")
    .set("#lego-three", {css:{zIndex:75}}, "slide_five+=0.4")
    .to("#lego-five", 0.4, {x: -70,y:210, ease:Power4.easeInOut}, "slide_five+=0.4")
    .to("#lego-four", 0.4, {x: 70,y:70, ease:Power4.easeInOut}, "slide_five+=0.5")

    .to("#lego-one", 0.4, {x: 140,y:-140, ease:Power4.easeInOut}, "slide_six+=0.0")
    .set("#lego-one", {css:{zIndex:75}}, "slide_six+=0.4")
    .set("#lego-two", {css:{zIndex:65}}, "slide_six+=0.4")
    .to("#lego-two", 0.4, {x: 0,y:-140, ease:Power4.easeInOut}, "slide_six+=0.4")
    .to("#lego-three", 0.4, {x: -140,y:-0, ease:Power4.easeInOut}, "slide_six+=0.5")

    .to("#lego-five", 0.4, {x: -140,y:140, ease:Power4.easeInOut}, "slide_seven+=0.0")
    .set("#lego-five", {css:{zIndex:75}}, "slide_seven+=0.4")
    .set("#lego-four", {css:{zIndex:85}}, "slide_seven+=0.4")
    .set("#lego-one", {css:{zIndex:80}}, "slide_seven+=0.4")
    .to("#lego-four", 0.4, {x: 0,y:140, ease:Power4.easeInOut}, "slide_seven+=0.4")
    .to("#lego-one", 0.4, {x: 70,y:-70, ease:Power4.easeInOut}, "slide_seven+=0.5")

    .to("#lego-two", 0.4, {x: 70,y:-70, ease:Power4.easeInOut}, "slide_eight+=0.0")
    .set("#lego-two", {css:{zIndex:75}}, "slide_eight+=0.4")
    .set("#lego-three", {css:{zIndex:65}}, "slide_eight+=0.4")
    .to("#lego-three", 0.4, {x: -70,y:-70, ease:Power4.easeInOut}, "slide_eight+=0.4")
    .to("#lego-five", 0.4, {x: -70,y:70, ease:Power4.easeInOut}, "slide_eight+=0.5")

    .to("#lego-four", 0.4, {x: -70,y:70, ease:Power4.easeInOut}, "slide_nine+=0.0")
    .set("#lego-one", {css:{zIndex:100}}, "slide_nine+=0.4")
    .set("#lego-two", {css:{zIndex:90}}, "slide_nine+=0.4")
    .to("#lego-one", 0.4, {x: 0,y:0, ease:Power4.easeInOut}, "slide_nine+=0.4")
    .to("#lego-two", 0.4, {x: 0,y:0, ease:Power4.easeInOut}, "slide_nine+=0.5")

    .to("#lego-three", 0.4, {x: 0,y:0, ease:Power4.easeInOut}, "slide_ten+=0.0")
    .set("#lego-four", {css:{zIndex:70}}, "slide_ten+=0.4")
    .set("#lego-five", {css:{zIndex:60}}, "slide_ten+=0.4")
    .to("#lego-five", 0.4, {x: 0,y:0, ease:Power4.easeInOut}, "slide_ten+=0.4")
    .to("#lego-four", 0.4, {x: 0,y:0, ease:Power4.easeInOut}, "slide_ten+=0.5")
;
