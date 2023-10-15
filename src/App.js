import React, { useState } from 'react';
import { Layout, Typography, Input, Select } from 'antd';

import Logo from './images/logo.png';

import GitHubIcon from '@mui/icons-material/GitHub';

import './App.css';

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

function App() {
	const [url, setUrl] = useState('');
	const [lang, setLang] = useState(null);

	const handleUrlChange = (e) => {
		setUrl(e.target.value);
	};

	const handleDropdownChange = (value) => {
		setLang(value);
	};

	return (
		<Layout className='App'>
			<Header className='Header'>
				<img src={Logo} alt="logo" style={{ width: '120px', flexShrink: '1' }} />

				<a href="https://github.com/bhenrichs/ai-youtube-video-summarizer2" target="_blank" rel="noreferrer">
					<GitHubIcon
						className='Header-Icon'
						style={{ fontSize: '40px', color: 'white' }}
					/>
				</a>
			</Header>

			<Content style={{ padding: '50px' }} className='App-Interface'>
				<Title className='App-Title' level="h1"><span className='fancy-text-gradient'>AI</span> YouTube Video Summarizer</Title>
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
				</div>
			</Content>
		</Layout>
	);
}

export default App;
