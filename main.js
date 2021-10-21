let eventHolder = 0
let lastEventTime = null
let lastDirectionX = null
document.addEventListener("wheel", swipe)


function swipe(){

	if(lastEventTime == null){
		action()
	}else if( ((new Date().getSeconds() - lastEventTime) > 1.5) || findDirection() != lastDirectionX ){
		eventHolder = 0
		action()
	}else{
		action()
	}

	lastEventTime = new Date().getSeconds()
}

function action(){
	eventHolder++

	if(findDirection() == "left"){ // Backward Command
		
		// Save last direction
		lastDirectionX = "left"

		console.log('Left ' + event.deltaX,eventHolder)
		if(eventHolder == 15){
			console.log("Inicia animação" + eventHolder)
		}else if(eventHolder >= 35){
			console.log("Ação de voltar"  + eventHolder)
		}

	}else if(findDirection() == "right"){ // Forward Command
		// Save last direction
		lastDirectionX = "right"
		
		console.log('Right ' + event.deltaX,eventHolder)
		if(eventHolder == 15){
			console.log("Inicia animação" + eventHolder)
		}else if(eventHolder >= 35){
			console.log("Ação de frente"  + eventHolder)
		}

	}
}

function findDirection(){
	if(event.deltaX < 0){
		return "left"
	}else if(event.deltaX > 0){
		return "right"
	}else{
		return "error"
	}
}