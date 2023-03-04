import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

function MusicChartEach(props) {

    const styles = {
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            borderbottom: '1px gray',
            // borderRadius: 16,
            padding: 8,
            margin: 8
        },
        image: {
            width: 50,
            height: 50,
            // borderRadius: 25
            margin: 10
        },
        fileContainer: {
            marginLeft: 10,
            display: 'flex',
            flexDirection: 'column',
            width: '30%'
        },
        musicSinger: {
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5
        },
        musicName: {
            color: 'black',
            fontSize: 16
        },
        musicAlbum: {
            color: 'black',
            fontSize: 16
        }
    };

    return (
        <>
            <div style={styles.wrapper}>
                <input type="checkbox" />
                <div>숫자</div>
                <div>
                    <img style={styles.image}
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTNfNzUg%2FMDAxNjQyMDg0Nzc3NjU2.G6Jh57i9hffNvbUmfKhwnmXvBNeRAyylHHmtziF1JHIg.bu5JCDGTVH5mse0l1AWRf6lsmrViQoO-5MMixhByWe4g.JPEG.ymhyun01%2F47611.jpg&type=sc960_832" />
                </div>
                <FontAwesomeIcon icon={faTag} />
                <div style={styles.fileContainer}>
                    <span style={styles.musicName}>{props.title}</span>
                    <span style={styles.musicSinger}>{props.musician}</span>
                </div>
                <div style={styles.musicAlbum}>{props.album}</div>
            </div>
        </>
    )
}

export default MusicChartEach;