function largest(){

	let show=document.getElementById("show");

	let array=[19, 53, 66, 22, 77, 12, 4, 53];
	let largest=0;

		for(i=0; i<8; i++){
			if(array[i]>largest){
				largest=array[i];
				}
			}

	 	show.innerHTML+=(+largest);
	}