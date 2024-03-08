'use client'
import { useState } from 'react';
import { OpenAIChatManual } from './OpenAIChatManual';

export function OpenAIInputForm() {
  // storeType と section の状態を管理する
  const [storeType, setStoreType] = useState('');
  const [section, setSection] = useState('');

  return (
    <>
      <h1>React App</h1>
      {/* 入力フォーム */}
      <div>
        <label>
          店舗のタイプ:
          <input
            type="text"
            value={storeType}
            onChange={(e) => setStoreType(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          セクション:
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          />
        </label>
      </div>
      <OpenAIChatManual storeType={storeType} section={section} />
    </>
  );
}
