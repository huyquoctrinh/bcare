import firestore from '@react-native-firebase/firestore';
var name_ex= 'quoc huy';
var id_ex= '1102';
var major_ex='hen';
const get_name = firestore().collection('Doctor').doc('80PouXX64ePegE0z8WzW')
.where('Name', '==', name_ex).get().then();
const get_id = firestore().collection('Doctor').doc('80PouXX64ePegE0z8WzW')
.where('Id', '==', id_ex).get().then();
const get_major = firestore().collection('Doctor').doc('80PouXX64ePegE0z8WzW')
.where('Major', '==', major_ex).get().then();
