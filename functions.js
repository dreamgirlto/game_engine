function startScene(the_scene){
    function u(){
        the_scene.update();
        requestAnimationFrame(u)
    }
    u()
}

