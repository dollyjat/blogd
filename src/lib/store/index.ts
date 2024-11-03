import { searchData } from './layout.svelte';
import axios from 'axios';

async function updateSearchMeta() {
	const { data } = await axios.get('/api/search');
	searchData.set(data);
}

export { updateSearchMeta };
