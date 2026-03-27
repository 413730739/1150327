import { useEffect, useState } from 'react';

interface SkillCircleProps {
  percent: number;
  label: string;
}

function SkillCircle({ percent, label }: SkillCircleProps) {
  const [offset, setOffset] = useState(283);
  const circumference = 2 * Math.PI * 45;

  useEffect(() => {
    const timer = setTimeout(() => {
      const newOffset = circumference - (circumference * percent / 100);
      setOffset(newOffset);
    }, 100);
    return () => clearTimeout(timer);
  }, [percent, circumference]);

  return (
    <div className="skill-item">
      <div className="skill-circle">
        <svg viewBox="0 0 100 100">
          <circle className="bg" cx="50" cy="50" r="45" />
          <circle
            className="progress"
            cx="50"
            cy="50"
            r="45"
            style={{ strokeDashoffset: offset }}
          />
        </svg>
      </div>
      <div className="skill-label">{label}</div>
    </div>
  );
}

interface ProgramSkillProps {
  name: string;
  score: number;
}

function ProgramSkill({ name, score }: ProgramSkillProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(score);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  const getBarColor = (s: number) => {
    if (s >= 80) return '#28a745';
    if (s >= 60) return '#ffc107';
    return '#dc3545';
  };

  return (
    <li>
      <span className="skill-name">{name}</span>
      <div className="skill-bar-container">
        <div
          className="skill-bar"
          style={{ width: `${width}%`, backgroundColor: getBarColor(score) }}
          data-score={score}
        />
      </div>
    </li>
  );
}

export default function App() {
  return (
    <div className="resume">
      <div className="left">
        <h1>吳哲宇</h1>
        <h4>動畫互動網頁特效入門 | 墨雨設計</h4>
        <hr className="my-4 border-[#0081a7] opacity-30" />
        <p>動畫互動網頁程式入門講師、墨雨設計 Monoame Design 負責人、設計與網頁全端雙棲的工程師，為了有趣的想法赴湯蹈火。</p>
        <div className="flex gap-2">
          <a href="#" className="btn1">作品集</a>
          <a href="#" className="btn2">Github</a>
        </div>

        <div className="block mt-8">
          <h4>Skills</h4>
          <h2>專業技能</h2>
          <div className="skills-grid">
            <SkillCircle percent={90} label="前端網頁開發(html/css/js)" />
            <SkillCircle percent={80} label="後端網頁 (laravel)" />
            <SkillCircle percent={85} label="平面設計" />
            <SkillCircle percent={75} label="插畫" />
            <SkillCircle percent={80} label="品牌視覺規劃 (CIS)" />
            <SkillCircle percent={85} label="介面/網頁設計 (UI/UX)" />
            <SkillCircle percent={70} label="AutoCAD製圖/程式開發(Lisp)" />
            <SkillCircle percent={75} label="3D建模彩現" />
            <SkillCircle percent={80} label="設計企劃/專案管理" />
          </div>
        </div>

        <div className="block mt-8">
          <h4>Programming Skill</h4>
          <h2>程式技能</h2>
          <ul className="listProgram">
            <ProgramSkill name="C++" score={80} />
            <ProgramSkill name="VB.net" score={70} />
            <ProgramSkill name="AutoLisp" score={60} />
            <ProgramSkill name="Verilog" score={50} />
            <ProgramSkill name="Python" score={85} />
            <ProgramSkill name="Html/Css/Js" score={95} />
            <ProgramSkill name="Pug/Sass" score={90} />
          </ul>
        </div>
      </div>

      <div className="right">
        <div className="block Experience">
          <h4>Experience / Works</h4>
          <h2>經歷與作品</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-point">
                <span className="year">2014</span>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>康師傅 活動用體感切醬料包遊戲 程式開發</li>
                  <li>交大電機 高中生專區 網頁設計 / 開發</li>
                  <li>長庚醫院 聲熱石墨希 腦瘤治療新契機3D 動畫</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point">
                <span className="year">2015</span>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>RemyMartin & Selinko 智慧酒瓶認證 UI/UX</li>
                  <li>Dyverse Studio 歧響音樂 互動官網 設計 / 開發</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point">
                <span className="year">2016</span>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>Complex Festival 複雜生活節互動官網 設計 / 開發</li>
                  <li>花旗聯合勸募官網 設計 / 開發</li>
                  <li>世界健康大會官網 設計 / 開發</li>
                  <li>雜學校展覽 網頁開發</li>
                  <li>開設動畫互動網頁程式入門線上課程</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-point">
                <span className="year">2017</span>
              </div>
              <div className="timeline-content">
                <ul>
                  <li>台北聲音地景計畫官網 設計 / 開發</li>
                  <li>工研院綠能所 節電官網 設計/開發</li>
                  <li>睿軒 / 睿田生技公司官網開發</li>
                  <li>D-school 台大創新設計學院網站 設計 / 開發</li>
                  <li>開設動畫互動網頁特效入門線上課程</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <h4>Contests</h4>
          <h2>比賽經歷</h2>
          <ul className="list-disc pl-5 text-[#383838] leading-relaxed">
            <li>宏碁數位創作獎第五屆首獎</li>
            <li>宏碁數位創作獎第六屆首獎</li>
            <li>宏碁數位創作獎第七屆首獎暨評審團大獎</li>
            <li>宏碁數位創作獎第八屆優勝</li>
            <li>宏碁數位創作獎第九屆首獎暨評審團大獎</li>
            <li>智慧鐵人競賽高職組首獎</li>
            <li>梅竹黑客松 微軟組首獎</li>
            <li>經濟部智慧城市黑客松 實踐組首獎</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
