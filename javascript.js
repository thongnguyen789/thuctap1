
function searchProduct() {
    var searchTerm = document.getElementById("searchInput").value;
    // Giả sử bạn có một hàm kiểm tra sự tồn tại của sản phẩm trong cơ sở dữ liệu
    // Đây là một ví dụ đơn giản
    var productExists = checkProductExistence(searchTerm);
  
    if (productExists) {
      document.getElementById("searchResult").innerText = "Sản phẩm đã được tìm thấy!";
    } else {
      document.getElementById("searchResult").innerText = "Sản phẩm bạn tìm kiếm không có trong cơ sở dữ liệu!";
    }
  }
  
  function checkProductExistence(searchTerm) {
    // Đây là nơi bạn sẽ thực hiện kiểm tra sự tồn tại của sản phẩm trong cơ sở dữ liệu
    // Trong ví dụ này, chúng ta sẽ giả định rằng sản phẩm không tồn tại
    return false;
  }
  
/*
  const itemsPerPage = 8; // Số lượng mục hiển thị trên mỗi trang
  let items = []; // Mảng chứa tất cả các mục
  let currentPage = 1; // Trang hiện tại
  let isExpanded = false; // Biến để kiểm tra trạng thái mở rộng
  
  // Hàm để hiển thị mục trên trang hiện tại
  function displayItems() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    
    // Nếu không mở rộng, chỉ hiển thị số lượng mục trên mỗi trang
    if (!isExpanded) {
      endIndex = Math.min(startIndex + itemsPerPage, items.length);
    }
    
    const currentItems = items.slice(startIndex, endIndex);
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = '';
    currentItems.forEach(item => {
      itemsContainer.innerHTML += `<div class="item">${item}</div>`;
    });
  }
  
  // Hàm để tạo nút phân trang
  function createPaginationButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('span');
      button.innerText = i;
      button.classList.add('page-number');
      if (i === currentPage) {
        button.classList.add('active');
      }
      button.addEventListener('click', () => {
        currentPage = i;
        displayItems();
        updateActiveButton();
      });
      pagination.appendChild(button);
    }
  }
  
  // Hàm để cập nhật trạng thái của nút phân trang
  function updateActiveButton() {
    const buttons = document.querySelectorAll('.page-number');
    buttons.forEach(button => {
      button.classList.remove('active');
      if (parseInt(button.innerText) === currentPage) {
        button.classList.add('active');
      }
    });
  }
  
  // Hàm để thay đổi trạng thái mở rộng khi nhấn nút "Xem thêm"/"Tóm gọn"
  function toggleItems() {
    isExpanded = !isExpanded;
    displayItems();
  }
*/
 
  const parts = document.querySelectorAll(".part");
  let currentPage = 0;
  const btnMore = document.getElementById("btnMore");
  const btnLess = document.getElementById("btnLess");

function showMore() {
  currentPage++;
  if (currentPage < parts.length) {
    parts[currentPage].classList.remove("hidden");
  }
  if (currentPage === parts.length - 1) {
    btnMore.classList.add("hidden");
  }
  btnLess.classList.remove("hidden");
}

const showLess = () => {
  if (currentPage > 0) {
    parts[currentPage].classList.add("hidden");
    currentPage--;
  }
  if (currentPage === 0) {
    btnLess.classList.add("hidden");
  }
  btnMore.classList.remove("hidden");
};

btnMore.addEventListener("click", showMore);
btnLess.addEventListener("click", showLess);

document.addEventListener("DOMContentLoaded", function() {
  var btnMore = document.getElementById("btnMore");

  function showMore() {
      // Thêm logic của bạn ở đây
      console.log("Button clicked!");
  }

  btnMore.addEventListener("click", showMore);
});

// Ẩn các phần nội dung từ phần thứ 2 trở đi
for (let i = 1; i < parts.length; i++) {
  parts[i].classList.add("hidden");
}















  