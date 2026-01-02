import React from "react";
import TitleHeader from "../components/TitleHeader";
import { documents } from "../constants";
import { FaFilePdf, FaDownload } from "react-icons/fa";
const Achievements = () => {
  return (
    <section id="achievements" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Achievements"
          sub="📜 Resume and Certifications 🎖️"
        />
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400">
                  <FaFilePdf size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-slate-400">{doc.description}</p>
                </div>
              </div>

              <a
                href={doc.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 text-sm font-medium text-white"
              >
                <FaDownload size={16} />
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
