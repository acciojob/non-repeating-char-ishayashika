function firstNonRepeatedChar(str) {
 // Write your code here
	const count=[];
	//will count the frequency of charchter present in string.
	for(let i=0;i<str.length;i++){
		count[str[i]]=(count[str[i]] || 0)+1;
	}
	for(let i=0;i<str.length;i++){
		if(count[str[i]]===1){
			return str[i];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 



