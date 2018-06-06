import * as React from 'react';
import './Ghost.css';

interface IProps {
	direction: string,
	ghostName: string
}

class Ghost extends React.Component<IProps, any> {

	public getGhost(direction: string, ghostName: string) {
		if(direction === "down") {
			return <div>
				<svg className={`Ghost ${ghostName} Ghost--${direction} Ghost__3`} viewBox="0 0 56 56" >
					<path className="body" d="M52,24V12h-4.1V8H44V4h-8V0H20v3.9h-8.1v4H8v4H4v12H0V52h4v4h7.9v-3.9h4V48h3.9v4.1H24V56h8v-4.1h3.9V48H40v3.9
						h3.9V56h8v-3.9h4V24H52z M24,32.1h-4.1v4H12v-4H8V20h3.8v-4H20v4h4V32.1z M47.9,32H44v4.1h-8V32h-4V20h4v-4h7.9v4h3.9L47.9,32
						L47.9,32z"/>
					<polygon className="eye_whites" points="24,20 24,32.1 19.9,32.1 19.9,28 11.9,28 11.9,32.1 8,32.1 8,20 11.8,20 11.8,16 20,16 20,20 "/>
					<polygon className="eye_whites" points="47.9,20 47.9,32 43.9,32 43.9,28 35.9,28 35.9,32 32,32 32,20 35.9,20 35.9,16 43.9,16 43.9,20 "/>
					<rect x="11.9" y="28" className="eye__pupil" width="7.9" height="8.1"/>
					<rect x="35.9" y="28" className="eye__pupil" width="8" height="8.1"/>
				</svg>
				<svg className={`Ghost ${ghostName} Ghost--${direction} Ghost__4`} viewBox="0 0 56 56" >
					<polygon className="eye_whites" points="24,19.8 24,31.9 20,31.9 20,28 12,28 12,31.9 8,31.9 8,19.8 12,19.8 12,16 20,16 20,19.8 "/>
					<polygon className="eye_whites" points="48,20 48,31.9 44,31.9 44,28 36,28 36,31.9 32,31.9 32,20 36,20 36,16 44,16 44,20 "/>
					<rect x="12" y="28" className="eye__pupil" width="8" height="8"/>
					<rect x="36" y="28" className="eye__pupil" width="8" height="8"/>
					<path className="body" d="M52,24V12h-4V8h-4V4h-8V0H20v4h-8v4H8v3.8H4V24H0v32h4v-4.1h4V48h4v3.9h4V56h8v-8.1h8V56h8v-4h4v-4.1h4v4h4v4h4
						V24H52z M24,31.9h-4V36h-8v-4.1H8V19.8h4V16h8v3.8h4V31.9z M44,36h-8v-4.1h-4V20h4v-4h8v4h4v12h-4V36z"/>
				</svg>
			</div>
		} else if(direction === "left") {
			return <div>
				<svg className={`Ghost ${ghostName} Ghost--${direction} Ghost__4`} viewBox="0 0 56 56" >
					<rect x="4" y="12.1" className="body" width="3.8" height="3.8"/>
					<path className="body" d="M52,23.9V12.1h-4V8h-4V3.9h-8.1V0H20v3.9h-8.1V8h-4v4.1H16V16h4v12h-4v4.1H7.8V28H4v-4.1H0V56h4v-4.1h3.8v-4h4
						v4H16V56h8v-8.1h7.9V56h8.1v-4.1h4v-4h3.5v4H52V56h4V23.9H52z M44,28h-4v4.1h-8.1V28H28V16h3.8v-3.8h8.1V16h4V28z"/>
					<rect x="4" y="19.9" className="eye__pupil" width="7.9" height="8.1"/>
					<polygon className="eye_whites" points="20,16 20,28 15.9,28 15.9,32.1 7.9,32.1 7.9,28 11.9,28 11.9,19.9 4,19.9 4,16 7.8,16 7.8,12.1 
						16,12.1 16,16 "/>
					<polygon className="eye_whites" points="44,16 44,28 39.9,28 39.9,32.1 31.8,32.1 31.8,28 36,28 36,19.9 28,19.9 28,16 31.8,16 31.8,12.1 
						39.9,12.1 39.9,16 "/>
					<rect x="28" y="20" className="eye__pupil" width="8" height="8"/>
				</svg>
				<svg className={`Ghost ${ghostName} Ghost--${direction} Ghost__3`} viewBox="0 0 56 56" >
					<rect x="4" y="12.1" className="body" width="3.8" height="3.8"/>
					<rect x="4" y="19.9" className="eye__pupil" width="7.9" height="8.1"/>
					<polygon className="eye_whites" points="20,16 20,28 15.9,28 15.9,32.1 7.9,32.1 7.9,28 11.9,28 11.9,19.9 4,19.9 4,16 7.8,16 7.8,12.1 
						16,12.1 16,16 "/>
					<polygon className="eye_whites" points="44,16 44,28 39.9,28 39.9,32.1 31.8,32.1 31.8,28 36,28 36,19.9 28,19.9 28,16 31.8,16 31.8,12.1 
						39.9,12.1 39.9,16 "/>
					<rect x="28" y="20" className="eye__pupil" width="8" height="8"/>
					<path className="body" d="M52,23.9V12.1h-4V8h-4V3.9h-8V0H20v3.9h-8V8H7.8v4.1H16V16h4v12h-4v4.1H7.8V28H4v-4H0v28.1h4V56h8v-3.9h4V48
						h3.9v4.1H24V56h8v-4.1h3.9V48H40v3.9h3.9V56h8v-3.9h4V23.9H52z M44,28h-4v4.1h-8.1V28H28V16h3.8v-3.8h8.1V16h4V28z"/>
				</svg>
			</div>
		} else if(direction === "right") {
			return <div>
				<svg className={`Ghost ${ghostName} Ghost--${direction} Ghost__4`} viewBox="0 0 56 56" >
					<rect x="48.2" y="12.1" className="body" width="3.8" height="3.8"/>
					<path className="body" d="M0,23.9L0,56h4v-4.1h4.5v-4H12v4h4V56h8.1v-8.1h7.9V56h8v-4.1h4.1v-4h4v4H52V56h4V23.9h-4V28h-3.8v4.1H40V28h-4
						V16h4v-3.8h8.1V8h-4V3.9H36V0L20.1,0v3.9H12V8H8v4.1H4v11.8H0z M12,16h4v-3.8h8.1V16H28v12h-3.8v4.1h-8.1V28h-4V16z"/>
					<rect x="44.2" y="19.9" className="eye__pupil" width="7.9" height="8.1"/>
					<polygon className="eye_whites" points="36,16 36,28 40.1,28 40.1,32.1 48.1,32.1 48.1,28 44.1,28 44.1,19.9 52,19.9 52,16 48.2,16 48.2,12.1 
						40,12.1 40,16 "/>
					<polygon className="eye_whites" points="12,16 12,28 16.1,28 16.1,32.1 24.2,32.1 24.2,28 20,28 20,19.9 28,19.9 28,16 24.2,16 24.2,12.1 
						16.1,12.1 16.1,16 "/>
					<rect x="20" y="20" transform="matrix(-1 -4.491442e-11 4.491442e-11 -1 48.0216 47.9716)" className="eye__pupil" width="8" height="8"/>
				</svg>
				<svg className={`Ghost ${ghostName} Ghost--${direction} Ghost__3`} viewBox="0 0 56 56" >
					<rect x="48.2" y="12.1" className="body" width="3.8" height="3.8"/>
					<rect x="44.2" y="19.9" className="eye_pupil" width="7.9" height="8.1"/>
					<polygon className="eye_whites" points="36,16 36,28 40.1,28 40.1,32.1 48.1,32.1 48.1,28 44.1,28 44.1,19.9 52,19.9 52,16 48.2,16 48.2,12.1 
						40,12.1 40,16 "/>
					<polygon className="eye_whites" points="12,16 12,28 16.1,28 16.1,32.1 24.2,32.1 24.2,28 20,28 20,19.9 28,19.9 28,16 24.2,16 24.2,12.1 
						16.1,12.1 16.1,16 "/>
					<rect x="20" y="20" transform="matrix(-1 -4.491442e-11 4.491442e-11 -1 48.0216 47.9716)" className="eye_pupil" width="8" height="8"/>
					<path className="body" d="M0,23.9l0,28.2h4V56h8v-4.1H16V48h4.1v3.9H24V56h8v-3.9h4.1V48h3.9v4.1h4V56h8v-3.9h4V24h-4v4h-3.8v4.1H40V28
						h-4V16h4v-3.8h8.1V8H44V3.9h-8V0l-16,0v3.9h-8V8H8v4.1H4v11.8H0z M12,16h4v-3.8h8.1V16H28v12h-3.8v4.1h-8.1V28h-4V16z"/>
				</svg>
			</div>
		} else if(direction === "up") {
			return <div>
				<svg className={`Ghost ${ghostName} Ghost--${direction} Ghost__4`} viewBox="0 0 56 56" >
					<polygon className="body" points="56,23.8 56,56 52,56 52,51.8 47.9,51.8 47.9,48 44,48 44,51.8 40.2,51.8 40.2,56 31.9,56 31.9,48 25.4,48 25.4,56 15.9,56 15.9,52 11.8,52 11.8,48 7.9,48 7.9,51.9 4,51.9 4,56 0,56 0,24 4,24 4,11.9 7.9,11.9 7.9,20 11.8,20	11.8,24 20,24 20,19.9 23.9,19.9 23.9,8 20,8 20,0 36,0 36,8 31.9,8 31.9,19.9 36,19.9 36,24 44,24 44,21.1 43.9,21.1 43.9,20 47.9,20 47.9,11.9 51.8,11.9 51.8,11.9 52,11.9 52,23.8 "/>
					<polygon className="eye_whites" points="23.9,8 23.9,19.9 20,19.9 20,24 11.8,24 11.8,20 7.9,20 7.9,8 12,8 12,12 20,12 20,8 "/>
					<polygon className="eye_whites" points="47.9,8 47.9,20 44,20 44,24 36,24 36,19.9 31.9,19.9 31.9,8 36,8 36,12 44,12 44,8 "/>
					<rect x="12" y="4.1" className="eye_pupil" width="8" height="8"/>
					<rect x="36" y="3.9" className="eye_pupil" width="8.1" height="8.1"/>
				</svg>
				<svg className={`Ghost ${ghostName} Ghost--${direction} Ghost__3`} viewBox="0 0 56 56" >
					<polygon className="eye_whites" points="23.9,8 23.9,19.9 20,19.9 20,24 11.8,24 11.8,20 7.9,20 7.9,8 12,8 12,12 20,12 20,8 "/>
					<polygon className="eye_whites" points="47.9,8 47.9,20 44,20 44,24 36,24 36,19.9 31.9,19.9 31.9,8 36,8 36,12 44,12 44,8 "/>
					<rect x="12" y="4.1" className="eye_pupil" width="8" height="8"/>
					<rect x="36" y="3.9" className="eye_pupil" width="8.1" height="8.1"/>
					<polygon className="body" points="56,23.8 56,52.1 52,52.1 52,56 44,56 44,52.1 40.1,52.1 40.1,48 36.1,48 36.1,52.1 32,52.1 32,56 
						24,56 24,51.9 20.1,51.9 20.1,48 16,48 16,51.9 12,51.9 12,56 4,56 4,52.1 0,52.1 0,24 4,24 4,11.9 7.9,11.9 7.9,20 11.8,20 
						11.8,24 20,24 20,19.9 23.9,19.9 23.9,8 20,8 20,0 36,0 36,8 31.9,8 31.9,19.9 36,19.9 36,24 44,24 44,20 47.9,20 47.9,11.9 
						52,11.9 52,23.8 "/>
				</svg>
			</div>
		} else {
			return <div/>
		}
	}

  public render() {
    const { direction, ghostName } = this.props;
    return (
			<div className={`Ghost--${direction}`}>
				{this.getGhost(direction, ghostName)}
			</div>
			
    );
  }
}

export default Ghost;
