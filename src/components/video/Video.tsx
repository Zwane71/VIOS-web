export default function Video() {
	return (
		<iframe
			src='http://192.168.1.33:5001/video_feed'
			frameBorder='0'
			allowFullScreen
			width={1080}
			height={1920}
		/>
	);
}