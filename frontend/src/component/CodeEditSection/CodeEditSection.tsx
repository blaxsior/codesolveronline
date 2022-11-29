import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import styles from './CodeEditSection.module.css';

//테마들
import "ace-builds/src-min-noconflict/theme-xcode";
import "ace-builds/src-min-noconflict/theme-cloud9_night";
//auto completion을 위해 필요한 옵션
import "ace-builds/src-min-noconflict/ext-language_tools";
//javascript 언어의 경우 코드 상의 에러를 감지해준다.
//나머지 언어는 없는 것 같음.
import "ace-builds/webpack-resolver";

//언어들
import "ace-builds/src-min-noconflict/mode-c_cpp";
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/mode-python";



const CodeEditSection: React.FC = (props) => {
    const [lang, setLang] = useState('c_cpp');
    const [theme, setTheme] = useState('xcode');

    const langChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setLang(e.target.value);
    }
    const themeChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        setTheme(e.target.value);
    }

    return (
        <section className={styles['code_sect']}>
            <div className={styles['selects']}>
            <h1>설정</h1>
                <select name='lang' onChange={langChangeHandler}
                    value={lang}>
                    <option value='c_cpp'>c/cpp</option>
                    <option value='javascript'>javascript</option>
                    <option value='python'>python</option>
                </select>
                <select name='theme' onChange={themeChangeHandler}
                    value={theme}>
                    <option value='xcode'>xcode</option>
                    <option value='cloud9_night'>cloud9_night</option>
                </select>
            </div>
            <AceEditor
                className={styles['editor']}
                mode={lang}
                theme="xcode"
                name="editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    fontSize: 18,
                    useWorker: true
                }}
            />
        </section>
    )
}

export default CodeEditSection;