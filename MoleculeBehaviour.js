#pragma strict

var Molecules:GameObject;
private var X:float;
private var Y:float;
private var Z:float;

private var moleculesArray = new GameObject[100];
private var moleculesPosArray = new Vector3[100];

function Start () {
	for (var x =0; x <9; x++){
		moleculesArray[x] = Instantiate(Molecules,this.transform.position + moleculesPositionArray[x],this.transform.rotation);
		moleculesArray[x].transform.parent = this.transform;
	}
}

function SetMoleculePos(){
	moleculenPositionArray[0] = Vector3(0,-2,0);
	moleculenPositionArray[2] = Vector3(-0.5,-1.5,-0.5);
	moleculenPositionArray[3] = Vector3(-0.5,-1.5,0.5);
	moleculenPositionArray[4] = Vector3(0.5,-1.5,-0.5);
	moleculenPositionArray[5] = Vector3(0.5,-1.5,0.5);
	moleculenPositionArray[6] = Vector3(1,-1,-1);
	moleculenPositionArray[7] = Vector3(1,-1,1);
	moleculenPositionArray[8] = Vector3(-1,-1,-1);
	moleculenPositionArray[9] = Vector3(-1,-1,1);
}