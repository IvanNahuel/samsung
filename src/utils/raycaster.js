const onDocumentMove = (event, scene, mouse, raycaster, camera) =>{
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    if(intersects.length > 0){
        console.log('sobre un objeto 3d');
    }

}