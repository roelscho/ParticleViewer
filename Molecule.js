#pragma strict

private var randomX:int;
private var randomY:int;
private var randomZ:int;
var movementMIN:int;
var movementMAX:int;
var step:float;
var timer:float;
var Molecule:GameObject;

function Start () {
	timer = 1;
}

function FixedUpdate () {
	timer = timer - Time.deltaTime;
	if(timer <= 0){
		Move();
		timer = 1;
	}
	transform.position = Vector3.Lerp(this.transform.position,this.transform.position + Vector3(randomX,randomY,randomZ), step);
}

function update (){
	
}

function Move (){
	// Round position 
	this.transform.position.x = Mathf.Round(this.transform.position.x);
	this.transform.position.y = Mathf.Round(this.transform.position.y);
	this.transform.position.z = Mathf.Round(this.transform.position.z);

	// Assign random step
		randomX = Random.Range(movementMIN,movementMAX);
		randomY = Random.Range(movementMIN,movementMAX);
		randomZ = Random.Range(movementMIN,movementMAX);
	
	// Borders of the grid	
	if ( this.transform.position.x <= 0 && randomX == -1) {
		randomX = 1;
	}
	if ( this.transform.position.x >= 19 && randomX == 1) {
		randomX = -1;
	}
	if ( this.transform.position.y <= 0 && randomY == -1) {
		randomY = 1;
	}
	if ( this.transform.position.y >= 19 && randomY == 1) {
		randomY = -1;
	}
	if ( this.transform.position.z <= 0 && randomZ == -1) {
		randomZ = 1;
	}
	if ( this.transform.position.z >= 19 && randomZ == 1) {
		randomZ = -1;
	}	
}