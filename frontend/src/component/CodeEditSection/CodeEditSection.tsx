import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IInitCode } from '../../interfaces/Problem.interface';
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
import { Form, useActionData } from 'react-router-dom';
import axios from 'axios';
import { useScoringMessage } from '../../hooks/useScoringMessage';

interface ICodeEditSectionProps {
    initcodes: IInitCode[],
    pid: number
}

interface result {
    message: string;
}

const CodeEditSection: React.FC<ICodeEditSectionProps> = (props) => {
    const [lang, setLang] = useState('c_cpp');
    const [theme, setTheme] = useState('xcode');
    const [code, setCode] = useState('code');
    const {
        message,
        isPending,
        submit: submitForm,
        clear: clearMessage
    } = useScoringMessage();

    // const rdata = useActionData() as result;

    const codeMap = useMemo(() => {
        const map = new Map<string, string>();
        props.initcodes.forEach(it => map.set(it.type, it.code));
        return map;
    }, [props.initcodes]);

    useEffect(() => {
        const cod = codeMap.get(lang);
        if (cod) {
            setCode(cod);
        }
    }, [lang]);

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
                <select onChange={langChangeHandler}
                    value={lang}>
                    <option value='c_cpp'>c/cpp</option>
                    <option value='javascript'>javascript</option>
                    <option value='python'>python</option>
                </select>
                <select onChange={themeChangeHandler}
                    value={theme}>
                    <option value='xcode'>xcode</option>
                    <option value='cloud9_night'>cloud9_night</option>
                </select>
            </div>
            <AceEditor
                className={styles['editor']}
                mode={lang}
                theme={theme}
                name="editor"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    fontSize: 18,
                    useWorker: true
                }}
                value={code}
                onChange={(value, e) => {
                    setCode(value);
                }}
            />
            <div className={styles['result']}>
                {
                    message.map((v, idx) => <p className={styles['result-line']} key={idx}>{v}</p>)
                }
            </div>
            <div className={styles['button-flex']}>
                <button
                    className='button'
                    onClick={clearMessage}
                >결과 지우기</button>
                <Form method='post' onSubmit={submitForm}>
                    <input
                        id='id'
                        name='id'
                        type='number'
                        hidden={true}
                        value={props.pid}
                        readOnly={true} />
                    <input
                        id='type'
                        name='type'
                        hidden={true}
                        value={lang}
                        readOnly={true} />
                    <textarea id='code'
                        name='code'
                        value={code}
                        hidden={true}
                        readOnly={true} />
                    <button
                        className='button'
                        type='submit'>제출하기</button>
                </Form>
            </div>
        </section>
    )
}

export default CodeEditSection;
