import { Input, Layout, Select, Typography } from 'antd';
import React, { useState } from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import Logo from './images/logo.png';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

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

function Main() {
	return <Routes>
		<Route exact path='/' element={<App />} />
		<Route exact path='/legal' element={<Legal />} />
		<Route exact path='/contact' element={<Contact />} />
		<Route exact path='/tos' element={<Terms />} />
	</Routes>
}

function Legal() {
	return (
		<>
			<AppHeader />

			<Layout className='Legal-Body'>
				<Content className='Legal-Content'>
					<div className='Legal-Table'>
						<div className='Legal-Table-Left'>
							<Title className='App-Title' level="4"><span className='fancy-text-gradient'>Impressum</span></Title>
							<br />
							<b>Website</b>
							<br />
							<p>Dieses Impressum gilt für alle Angebote unter der Domain yt2info.de inklusive aller Subdomains (Unterseiten).</p>
							<br />
							<b>Angaben gemäß § 5 TMG</b>
							<br />
							<p>
								Benjamin Henrich<br />
								c/o IP-Management #20066<br />
								Ludwig-Erhard-Str. 18<br />
								20459, Hamburg<br />
								Telefon: <a href="tel://+491782760130">+491782760130</a><br />
								E-Mail: <a href="mailto://benjamin@bhenrich.de">benjamin@bhenrich.de</a><br />
							</p>
						</div>
						<div className='Legal-Table-Right'>
							<Title className='App-Title' level="4"><span className='fancy-text-gradient uppies'>Datenschutzerkl&auml;rung</span></Title>
							<h2>1. Datenschutz auf einen Blick</h2>
							<h3>Allgemeine Hinweise</h3> <p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>
							<h3>Datenerfassung auf dieser Website</h3> <h4>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h4> <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.</p> <h4>Wie erfassen wir Ihre Daten?</h4> <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p> <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p> <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4> <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p> <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4> <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.</p> <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
							<h2>2. Hosting</h2>
							<p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
							<h3>Externes Hosting</h3> <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die &uuml;ber eine Website generiert werden, handeln.</p> <p>Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p> <p>Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.</p> <p>Wir setzen folgende(n) Hoster ein:</p>
							<p>Gericke KG<br />
								Lichtenbergstr. 53/1<br />
								88677 Markdorf<br />
								Deutschland</p>
							<h4>Auftragsverarbeitung</h4> <p>Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
							<h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
							<h3>Datenschutz</h3> <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.</p> <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das geschieht.</p> <p>Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.</p>
							<h3>Hinweis zur verantwortlichen Stelle</h3> <p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p> <p>Benjamin Henrich<br />
								c/o IP-Management #20066<br />
								Ludwig-Erhard-Str. 18<br />
								20459, Hamburg</p>

							<p>Telefon: *491782760130<br />
								E-Mail: benjamin@bhenrich.de</p>
							<p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</p>

							<h3>Speicherdauer</h3> <p>Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.</p>
							<h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3> <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.</p>
							<h3>Empfänger von personenbezogenen Daten</h3> <p>Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine &Uuml;bermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung geschlossen.</p>
							<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3> <p>Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>
							<h3>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3> <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
							<h3>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h3> <p>Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
							<h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3> <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
							<h3>Auskunft, Berichtigung und L&ouml;schung</h3> <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.</p>
							<h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3> <p>Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p> <ul> <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.</li> <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li> </ul> <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
							<h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3> <p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p> <p>Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
							<h2>4. Datenerfassung auf dieser Website</h2>
							<h3>Anfrage per E-Mail, Telefon oder Telefax</h3> <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p> <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p> <p>Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.</p>
							<h2>5. Plugins und Tools</h2>
							<h3>Google Fonts</h3> <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p> <p>Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p> <p>Wenn Ihr Browser Google Fonts nicht unterst&uuml;tzt, wird eine Standardschrift von Ihrem Computer genutzt.</p> <p>Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der Datenschutzerkl&auml;rung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
							<p>Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active</a></p>
							<p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
						</div>
					</div>
				</Content>
			</Layout>

			<AppFooter />
		</>
	);
}

function Contact() {
	return (
		<>
			<AppHeader />
			<Layout className='App'>
				<Content>
					<Title className='App-Title' level="4"><span className='fancy-text-gradient'>Contact</span></Title>
					<span>
						<p style={{ textAlign: 'center' }}>
							<h2>Benjamin Henrich</h2>
							<b>Post Adress:</b><br />
							<i>
								c/o IP-Management #20066<br />
								Ludwig-Erhard-Str. 18<br />
								20459, Hamburg<br /><br />
							</i>
							<b>Digital Contact:</b><br />
							Phone: <a href="tel://+491782760130">+49 178 2760 130</a><br />
							E-Mail: <a href="mailto://benjamin@bhenrich.de">benjamin@bhenrich.de</a><br /><br />

							<a href='https://twitter.com/yuniidev' target='_blank' rel='noreferrer'>
								<TwitterIcon />
							</a>
						</p>
					</span>
				</Content>
			</Layout>
			<AppFooter />
		</>
	);
}

function Terms() {
	return (
		<>
			<AppHeader />
			<Layout className='App'>
				<Content className='App-Interface'>
					<div style={{ paddingTop: '40px', paddingBottom: '50px' }}>
						<p>
							<h1><span className="fancy-text-gradient">Terms of Service</span></h1>

							<h3>Last Updated: 16th October 2023</h3>

							<h2>Acceptance of Terms</h2>
							<p>By accessing and using yt2info ("the Service"), you agree to comply with and be bound by the terms and conditions contained herein ("Terms of Service"). If you do not agree to these terms, please do not use the Service.</p>

							<h2>Service Description</h2>
							<p>yt2info is a tool that allows users to input a YouTube video link and a preferred language for a summary. The Service pulls the video transcript using an API and processes it through an AI model to generate a summary, which is then returned to the user. The Service is available to the general public and is free to use.</p>

							<h3>Limitations or Restrictions</h3>
							<ul>
								<li>Maximum video length: 10 minutes</li>
								<li>Videos must have subtitles in at least one language<br /><i>NOTE: Automatically generated subtitles do not count. The video uploader needs to have manually added subtitles on the video.</i></li>
							</ul>

							<h2>User Data & Privacy</h2>
							<p>The Service does not collect or store any personal data from its users. All processing is done in real-time and no user information is saved or shared with third parties.</p>

							<h2>Intellectual Property</h2>
							<p>The original uploader of the YouTube video retains ownership of the summarized transcripts. Transcripts are copyable and summaries are shareable for private use only.</p>

							<h2>User Conduct</h2>
							<p>By using the Service, you agree that the generated summaries are for:</p>
							<ul>
								<li>Private use only</li>
								<li>Limited redistribution <i>(See Section "Intellectual Property" of the Terms of Service)</i></li>
								<li>No commercial use</li>
								<li>No modification</li>
							</ul>

							<h3>Consequences for Violations</h3>
							<p>If you violate these terms, your access to the Service may be restricted. Legal actions will only be taken through thirt-party cease and desist requests and/or legal requests.</p>

							<h2>Third-Party Interactions</h2>
							<p>The Service uses a YouTube API for transcript collection. No user YouTube accounts are required for use, and there are no affiliations or partnerships with YouTube.</p>

							<h2>Availability & Updates</h2>
							<p>The Service is available globally. Updates to the Service will be infrequent and only when necessary. Users will not be notified of changes to the Service or these Terms of Service.</p>

							<h2>Termination</h2>
							<p>The Service reserves the right to terminate access for users who violate the usage restrictions.</p>

							<h2>Disputes</h2>
							<p>Any disputes arising from the use of the Service will be handled through Negotiation and/or Arbitration.</p>

							<h2>Customer Support</h2>
							<p>Support is available via E-Mail or Twitter DM. For contact information, please refer to the 'Contact' section in the footer or visit <a href="https://yt2info.de/contact">yt2info.de/contact</a>. Response times are not guaranteed.</p>
						</p>
					</div>
				</Content>
			</Layout>
			<AppFooter />
		</>
	);
}

function AppFooter() {
	return (
		<footer className='Footer'>
			Made with <span role='img' aria-label='heart'>❤️</span> by <a href='https://github.com/bhenrich' target='_blank' rel='noreferrer'>Benjamin "YuNii" Henrich</a>
			<br />
			<p style={{ marginTop: '-2px', marginBottom: '-3px' }}>
				<Link to='/legal'>
					Legal
				</Link>
				&nbsp;|&nbsp;
				<Link to='/contact'>
					Contact
				</Link>
				&nbsp;|&nbsp;
				<Link to='/tos'>
					Terms of Service
				</Link>
			</p>
		</footer>
	);
}

function AppHeader() {
	return (
		<Header className='Header'>
			<Link to='/'>
				<img src={Logo} alt="logo" style={{ width: '120px', flexShrink: '1' }} className='Header-Logo' />
			</Link>

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
	);
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
		<>
			<Layout className='App'>

				<AppHeader />

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

				<AppFooter />
			</Layout >
		</>
	);
}

export default Main;
