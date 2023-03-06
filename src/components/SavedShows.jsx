import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../Context/AuthContext';
import { db } from '../firebase';
import { updateDoc,doc,onSnapshot } from 'firebase/firestore';
function SavedShows() {

    const [movies,setMovies] = useState([])
    const {user} = UserAuth();
    const slideLeft = () => {
        var slider = document.getElementById("slider" );
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
      };

      useEffect(() =>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows);
        })

      },[user?.email]);

      const movieRef = doc(db, 'users',`${user?.email}`);
      const deleteShow = async (passedId) => {
        try{
            const result = movies.filter((movie) => movie.id !== passedId);
            await updateDoc(movieRef,{
                savedShows: result,
            })
        }
        catch(error){
            console.log(error)
        }
      }
        
  return (
    <div>
        <h2 className="text-white font-bold md:text-xl p-3">My shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={50}
          className="bg-white rounded-full absolute opacity-50 ml-4 z-10 hover:opacity-100 cursor-pointer hidden group-hover:block "
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {movies.map((movie, id) => (
            <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img
              className="w-full h-auto block"
              src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
              alt={movie?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-white">
              <p className="whitespace-normal text-xs md:text-sm font-bold flex  justify-center items-center h-full text-center">
                {movie?.title}
              </p>
              <p className='absolute text-gray-300 top-4 right-4'
              onClick={()=> deleteShow(movie.id)}
              ><AiOutlineClose /></p>
            </div>
          </div>
          ))}
        </div>
        <MdChevronRight
          size={50}
          className="bg-white rounded-full absolute  opacity-50 top-14 right-4 z-10 hover:opacity-100 cursor-pointer hidden group-hover:block"
          onClick={slideRight}
        />
      </div>
    </div>
  )
}

export default SavedShows