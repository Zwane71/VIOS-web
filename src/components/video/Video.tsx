export default function Video() {
	return (
		<iframe
			src='http://192.168.0.19:5001/video_feed'
			frameBorder='0'
			allowFullScreen
			width={1080}
			height={1920}
		/>
	);
}
