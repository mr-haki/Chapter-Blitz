const searchInput = document.getElementById("searchInput");
const recommendations = document.getElementById("recommendations");


const mangaList = [
    {
        name: "One Piece",
        link: "index-one-piece.html",
        description: "Chapter summaries, spoilers and discussions."
    }
];


searchInput.addEventListener("input", function(){

    let searchValue = searchInput.value.toLowerCase();

    recommendations.innerHTML = "";


    mangaList.forEach(function(manga){

        if(manga.name.toLowerCase().includes(searchValue) && searchValue !== ""){


            recommendations.innerHTML += `

            <div class="recommendation-card">

                <h3>
                    <a href="${manga.link}">
                        🏴‍☠️ ${manga.name}
                    </a>
                </h3>

            </div>

            `;

        }

    });

});
