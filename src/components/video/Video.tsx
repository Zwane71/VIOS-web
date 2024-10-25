export default function Video() {
	return (
		<iframe
			src='http://10.200.0.110:5001/video_feed'
			frameBorder='0'
			allowFullScreen
			width={1080}
			height={1920}
		/>
	);
}
