import styles from '@/styles/HelixLoader.module.scss';

export default function HelixLoader(){

  const divs = []
  for (let i=0; i<26; i++){
    divs.push(<div key={`HLDot-${i}`} className={ [styles.dot].join(' ') }></div>)
  }

  return(
    <div className={[styles.helixLoader, 'relative w-full'].join(' ') }>
      { divs.length > 0 ? divs : <></> }
    </div>
  );
}