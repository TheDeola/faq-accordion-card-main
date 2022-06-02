function showContent(id){
    const pageElement = document.getElementById(`content${id}`);
      for(let i = 1;i<=5 ;i++)
    {
        if(i == id && pageElement.style.maxHeight == "100px")
        {
          document.getElementById(id).classList.add('active');
          document.getElementById(`arrow${i}`).style.transform="rotate(180deg)";
          document.getElementById(`content${i}`).style.maxHeight="100px";
        }
        else{
          document.getElementById(i).classList.remove('active');
          document.getElementById(`arrow${i}`).style.transform="rotate(0deg)";
          document.getElementById(`content${i}`).style.maxHeight="0px";
      }
    }

      if(pageElement.style.maxHeight == "0px" || pageElement.style.maxHeight == "")
    {
        document.getElementById(id).classList.add('active');
        document.getElementById(`arrow${id}`).style.transform="rotate(180deg)";
        pageElement.style.maxHeight="100px";
    }
      else{
        
        document.getElementById(id).classList.remove('active');
        document.getElementById(`arrow${id}`).style.transform="rotate(0deg)";
        pageElement.style.maxHeight="0px";
    }
      
}
  