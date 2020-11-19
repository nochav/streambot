const btn = document.getElementById("submit");
btn.addEventListener("click", getLink)

function getLink(){
	const input = document.getElementById("input");
	const verify = document.getElementById("verify_link");
	if(!input.value || !input.value.startsWith("https")){
		verify.style.color = "#db200f";
		verify.innerHTML = "You need to provide a YouTube video to stream";
		return;
	}
	if(!input.value.includes("youtube")){
		verify.style.color = "#db200f";
		verify.innerHTML = "You need to provide a YouTube video to stream";
		return;
	}
	verify.style.color = "#0aa31e";
	verify.innerHTML = "Your link will be played every 10 minutes";
	
	stream(input.value);
	
}

function stream(url){
	const link = url;
	
	const openWin = window.open(link);

	setTimeout(() => {
		openWin.close(link);
		stream(link);
	}, 600000);
}



























