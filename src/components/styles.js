import { grey400 } from 'material-ui/styles/colors';

const styles = {
	app: {
		textAlign: 'center'
	},
	appHeader: {
		fontFamily: 'Glamour',
		maxWidth: 350,
		height: 100,
		margin: '20px auto',
		backgroundColor: '#fff',
		color: '#000',
		position: 'relative'
	},
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: '3rem',
		paddingRight: 30,
	},
	rootCategory: {
		fontFamily: 'Glamour',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	menu: {
		float: 'right',
		position: 'absolute',
		top: 0,
		right: 0,
	},
	logOut: {
		color: 'green'
	},
	adminlist: {
		width: 400,
		height: 350,
		overflowY: 'auto'
	},
	card: {
		fontFamily: 'Glamour',
		width: '100%',
		maxWidth: 400,
		height: 450,
		overflowY: 'auto',
		margin: '0 auto',
	},
	cardTitle: {
		textAlign: 'justify'
	},
	btnContainer: {
		width: '60%',
		margin: '0 auto'
	},
	nameBtn: {
		float: 'left',
		margin: '18px 0',
		fontSize: '0.8rem'
	},
	pictureBtn: {
		border: 'none',
		background: 'transparent',
		cursor: 'pointer'
	},
	flatBtn: {
		marginTop: 50
	},
	deleteBtn: {
		border: 0,
		background: 'transparent',
		fontSize: '1.2rem',
		color: 'red',
		cursor: 'pointer',
		alignItems: 'flex-end',
	},
	editBtn: {
		minWidth: '36px',
	},
	uploadedPicture: {
		display: 'none',
		width: '30%',
		height: 'auto',
		margin: '20px auto',
	},
	picture: {
		width: '50%'
	},
	pictureTitle: {
		lineHeight: 0.1
	},
	footer: {
		fontFamily: 'Glamour, sans-serif',
		display: 'block',
		textAlign: 'center'
	},
	name: {
		display: 'block',
		fontWeight: 'bold'
	},
	list: {
		width: '80%',
		margin: '0 auto',
		listStyle: 'none',
		padding: 0,
		position: 'relative',
	},
	listItem: {
		textAlign: 'left',
		position: 'relative'
	},
	date: {
		fontSize: '0.6rem',
		color: grey400
	},
	text: {
		fontSize: '0.7rem',
		textAlign: 'justify',
		lineHeight: '3px'
	},
	editBtnContainer: {
		position: 'absolute',
		top: 5,
		right: 5,
		opacity: 0,
	}
};

export default styles;