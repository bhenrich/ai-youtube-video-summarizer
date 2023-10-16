import { Input, Layout, Select, Typography } from 'antd';
import React, { useState } from 'react';

import Logo from './images/logo.png';

import GitHubIcon from '@mui/icons-material/GitHub';

import './App.css';

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;
const { Text } = Typography;



const getSummary = async (url, lang) => {
	const response = await fetch(`https://yuniiworks.de:5034/getVideoSummary?videoUrl=${url}&langCode=${lang}`);
	const data = await response.json();

	return data.summary;
}

function App() {
	const [url, setUrl] = useState('');
	const [lang, setLang] = useState(null);
	const [summary, setSummary] = useState('');

	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	};

	const handleDropdownChange = (value) => {
		setLang(value);
	};

	const handleSubmit = async () => {
		if (url === '') {
			return;
		}

		const summary = await getSummary(url, lang);
		setSummary(summary);
	}

	return (
		<Layout className='App'>
			<Header className='Header'>
				<img src={Logo} alt="logo" style={{ width: '120px', flexShrink: '1' }} className='Header-Logo' />

				<a href='https://ko-fi.com/O4O5Q3ABB' target='_blank' rel='noreferrer'>
					<img height='36' style={{ border: '0px', height: '36px', marginTop: '25px', transform: 'translateX(-45px)' }} src='https://storage.ko-fi.com/cdn/brandasset/kofi_button_stroke.png' border='0' alt='Buy Me a Coffee at ko-fi.com' />
				</a>

				<a href="https://github.com/bhenrich/ai-youtube-video-summarizer" target="_blank" rel="noreferrer">
					<GitHubIcon
						className='Header-Icon'
						style={{ fontSize: '40px', color: 'white' }}
					/>
				</a>
			</Header>

			<Content style={{ padding: '50px' }} className='App-Interface'>
				<Title className='App-Title' level="4"><span className='fancy-text-gradient'>AI</span> YouTube Video Summarizer</Title>
				<div className='App-UI'>
					<Input
						placeholder="Enter URL"
						value={url}
						onChange={handleUrlChange}
						style={{ width: '90%' }}
						className='URL-Input'
					/>
					<Select
						placeholder="Language"
						onChange={handleDropdownChange}
						style={{ width: '10%' }}
						className='Language-Input'
					>
						<Option value="en">English</Option>
						<Option value="de">German</Option>
						<Option value="fr">French</Option>
						<Option value="es">Spanish</Option>
						<Option value="it">Italian</Option>
						<Option value="pt">Portuguese</Option>
						<Option value="ru">Russian</Option>
						<Option value="zh">Chinese</Option>
						<Option value="ja">Japanese</Option>
						<Option value="ar">Arabic</Option>
						<Option value="hi">Hindi</Option>
						<Option value="id">Indonesian</Option>
						<Option value="ko">Korean</Option>
						<Option value="tr">Turkish</Option>
						<Option value="vi">Vietnamese</Option>
						<Option value="sq">Albanian</Option>
						<Option value="hy">Armenian</Option>
						<Option value="az">Azerbaijani</Option>
						<Option value="be">Belarusian</Option>
						<Option value="bg">Bulgarian</Option>
						<Option value="ceb">Cebuano</Option>
						<Option value="co">Corsican</Option>
						<Option value="da">Danish</Option>
						<Option value="ee">Ewe</Option>
						<Option value="ge">Georgian</Option>
						<Option value="gn">Guarani</Option>
						<Option value="ha">Hausa</Option>
						<Option value="is">Icelandic</Option>
						<Option value="ga">Irish</Option>
						<Option value="jv">Javanese</Option>
						<Option value="km">Khmer</Option>
						<Option value="kri">Krio</Option>
						<Option value="lo">Lao</Option>
						<Option value="ln">Lingala</Option>
						<Option value="mk">Macedonian</Option>
						<Option value="ml">Malayalam</Option>
						<Option value="mr">Marathi</Option>
						<Option value="nso">Northern Sotho</Option>
						<Option value="or">Odia</Option>
						<Option value="fa">Persian</Option>
						<Option value="pa">Punjabi</Option>
						<Option value="gd">Scottish Gaelic</Option>
						<Option value="sd">Sindhi</Option>
						<Option value="sl">Slovenian</Option>
						<Option value="sv">Swedish</Option>
						<Option value="tt">Tatar</Option>
						<Option value="ti">Tigrinya</Option>
						<Option value="tk">Turkmen</Option>
						<Option value="ug">Uyghur</Option>
						<Option value="cy">Welsh</Option>
						<Option value="yi">Yiddish</Option>
					</Select>

					<button onClick={handleSubmit} className='App-Submit'>
						Generate
					</button>
				</div>
			</Content>

			<Content className='App-Output'>
				<Content className='App-Output-Text'>
					<Text copyable>
						{
							summary !== '' ?
								summary :
								'Use the form above to get started! Not satisfied with the result? Just generate again!'
						}
					</Text>
				</Content>
			</Content>

			<footer className='Footer'>
				Made with <span role='img' aria-label='heart'>❤️</span> by <a href='https://github.com/bhenrich' target='_blank' rel='noreferrer'>Benjamin 'YuNii' Henrich</a>
				<br />
				<p style={{ marginTop: '-2px', marginBottom: '-3px' }}>
					<a>
						Legal
					</a>
					&nbsp;|&nbsp;
					<a>
						Contact
					</a>
					&nbsp;|&nbsp;
					<a>
						Terms of Service
					</a>
				</p>
			</footer>
		</Layout >
	);
}

export default App;
