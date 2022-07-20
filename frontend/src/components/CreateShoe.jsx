import React, {useState} from 'react'

function CreateShoe({postShoe}) {
    const [brandName, setBrandName] = useState('');
    const [gridPicture, setGridPicture] = useState('');
    const [name, setName] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [retailPrice, setRetailPrice] = useState('');
    const [silhouette, setSilhouette] = useState('');
    const [storyHtml, setStoryHtml] = useState('');

	// HANDLE BUTTON SUBMISSION
	const handleSubmit = async (event) => {
		// PREVENT PAGE REFRESH AFTER FOR SUBMISSION
		event.preventDefault();

		const newShoe = {
			brandName,
			gridPicture,
			name,
			releaseDate,
			retailPrice,
			silhouette,
			storyHtml
		}

		// DATABSE CALL
		await postShoe(newShoe);

		// EMPTY TEXT BOXES
		setBrandName('');
		setGridPicture('');
		setName('');
		setReleaseDate('');
		setRetailPrice('');
		setSilhouette('');
		setStoryHtml('');
	}

	return (
		<div className='form'>
			<h3>Create A Shoe</h3>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Enter brand name' value={brandName} 
				onChange={(event) => setBrandName(event.target.value)}></input>
				<input type='text' placeholder='Enter picture URL' value={gridPicture} 
				onChange={(event) => setGridPicture(event.target.value)}></input>
				<input type='text' placeholder='Enter shoe name' value={name} 
				onChange={(event) => setName(event.target.value)}></input>
				<input type='text' placeholder='Enter release data' value={releaseDate} 
				onChange={(event) => setReleaseDate(event.target.value)}></input>
				<input type='text' placeholder='Enter retail price' value={retailPrice} 
				onChange={(event) => setRetailPrice(event.target.value)}></input>
				<input type='text' placeholder='Enter silhouette' value={silhouette} 
				onChange={(event) => setSilhouette(event.target.value)}></input>
				<input type='text' placeholder='Enter Story of shoe' value={storyHtml} 
				onChange={(event) => setStoryHtml(event.target.value)}></input>
				<button onClick={() => postShoe()}>Add Shoe</button>
			</form>
		</div>
	)
}

export default CreateShoe;