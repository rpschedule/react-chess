export default function isUpperCase (string) {
    // checks if string is not char
	if ( !/[a-z]/.test(string.toLowerCase()) ) return null;
    if ( string.toUpperCase() === string ) return true;
    return false;
}