import React, { useState } from 'react';
import "./FolderList.css";
import SearchBox from '../searchBox/searchBox.component';

const FolderList = ({ placeholder, documents }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredDocuments = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
        />
      </div>
      <div className="folder-list">
        <ul className="document-list">
          {filteredDocuments.map((doc) => (
            <li className="document-item" key={doc.title}>
              <a href={doc.url} target="_blank" rel="noopener noreferrer" className="document-link">
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FolderList;
