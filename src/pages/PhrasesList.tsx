
import React, { useEffect, useState } from 'react';
import AudioButton from '../components/AudioButton';
import { Phrase } from '../types';

// 修改版本号以强制浏览器获取新数据
const DATA_VERSION = "20250116_FULL_UPDATE_110";

const PhrasesList: React.FC = () => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 使用 fetch 动态获取 public 目录下的 JSON，并添加版本号 query 参数避开缓存
    fetch(`/data/phrases.json?v=${DATA_VERSION}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.json();
      })
      .then((data) => {
        setPhrases(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("加载失败，请检查网络");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-10 text-center text-gray-500">正在加载口语数据...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
        <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-french-blue mb-2">日常口语精选</h2>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">
              共 {phrases.length} 句 (v2.0)
            </span>
        </div>
        <p className="text-gray-600 text-sm">
          精选高频实用句子，涵盖问候、旅行、餐饮、紧急情况等10大场景。点击喇叭图标听标准发音。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {phrases.map((phrase, index) => (
          <div key={phrase.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between hover:border-green-200 transition-colors gap-3">
            <div className="flex items-start sm:items-center gap-4 flex-1">
               <span className="text-gray-300 font-bold w-8 text-center text-sm pt-1 sm:pt-0">{index + 1}</span>
               <div className="flex-1">
                 <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <p className="text-lg font-bold text-gray-800">{phrase.french}</p>
                 </div>
                 <p className="text-gray-500">{phrase.chinese}</p>
               </div>
            </div>
            <div className="self-end sm:self-center">
                <AudioButton text={phrase.french} size="md" className="bg-green-50 text-green-600 hover:text-green-700 hover:bg-green-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhrasesList;
