/**
 * by MonsterDuang
 */
(function ($) {
  /**
   * 1, 缩略图大小和父容器大小一致
   * 2, 父容器 href 属性为高清图片路径
   */
  $.fn.zoomImage = function (paras) {
    /**
     * 默认参数
     */
    var defaultParas = {
      layerW: 100, // 遮罩宽度
      layerH: 100, // 遮罩高度
      layerOpacity: 0.2, // 遮罩透明度
      layerBgc: "#000", // 遮罩背景颜色
      showPanelW: 500, // 显示放大区域宽
      showPanelH: 600, // 显示放大区域高
      marginL: 5, // 放大区域离缩略图右侧距离
      marginT: 0,
    };

    if ($(window).width() < 1800) {
      var defaultParas = {
        layerW: 100, // 遮罩宽度
        layerH: 100, // 遮罩高度
        layerOpacity: 0.2, // 遮罩透明度
        layerBgc: "#000", // 遮罩背景颜色
        showPanelW: 450, // 显示放大区域宽
        showPanelH: 600, // 显示放大区域高
        marginL: 1, // 放大区域离缩略图右侧距离
        marginT: 0,
      };
    }
    if ($(window).width() < 1600) {
      var defaultParas = {
        layerW: 100, // 遮罩宽度
        layerH: 100, // 遮罩高度
        layerOpacity: 0.2, // 遮罩透明度
        layerBgc: "#000", // 遮罩背景颜色
        showPanelW: 400, // 显示放大区域宽
        showPanelH: 600, // 显示放大区域高
        marginL: 1, // 放大区域离缩略图右侧距离
        marginT: 0,
      };
    }
    if ($(window).width() < 1399) {
      var defaultParas = {
        layerW: 100, // 遮罩宽度
        layerH: 100, // 遮罩高度
        layerOpacity: 0.2, // 遮罩透明度
        layerBgc: "#000", // 遮罩背景颜色
        showPanelW: 350, // 显示放大区域宽
        showPanelH: 600, // 显示放大区域高
        marginL: 2, // 放大区域离缩略图右侧距离
        marginT: 0,
      };
    }
    if ($(window).width() < 1300) {
      var defaultParas = {
        layerW: 100, // 遮罩宽度
        layerH: 100, // 遮罩高度
        layerOpacity: 0.2, // 遮罩透明度
        layerBgc: "#000", // 遮罩背景颜色
        showPanelW: 430, // 显示放大区域宽
        showPanelH: 500, // 显示放大区域高
        marginL: 1, // 放大区域离缩略图右侧距离
        marginT: 0,
      };
    }
    if ($(window).width() < 1200) {
      var defaultParas = {
        layerW: 100, // 遮罩宽度
        layerH: 100, // 遮罩高度
        layerOpacity: 0.2, // 遮罩透明度
        layerBgc: "#000", // 遮罩背景颜色
        showPanelW: 340, // 显示放大区域宽
        showPanelH: 600, // 显示放大区域高
        marginL: 1, // 放大区域离缩略图右侧距离
        marginT: 0,
      };
    }
    if ($(window).width() < 1000) {
      var defaultParas = {
        layerW: 100, // 遮罩宽度
        layerH: 100, // 遮罩高度
        layerOpacity: 0.2, // 遮罩透明度
        layerBgc: "#000", // 遮罩背景颜色
        showPanelW: 320, // 显示放大区域宽
        showPanelH: 500, // 显示放大区域高
        marginL: 3, // 放大区域离缩略图右侧距离
        marginT: 0,
      };
    }
    if ($(window).width() < 991) {
      var defaultParas = {
        layerW: 0, // 遮罩宽度
        layerH: 0, // 遮罩高度
        layerOpacity: 0.2, // 遮罩透明度
        layerBgc: "#000", // 遮罩背景颜色
        showPanelW: 0, // 显示放大区域宽
        showPanelH: 0, // 显示放大区域高
        marginL: 0, // 放大区域离缩略图右侧距离
        marginT: 0,
      };
    }

    paras = $.extend({}, defaultParas, paras);

    $(this).each(function () {
      var self = $(this).css({ position: "relative" });
      var selfOffset = self.offset();
      var imageW = self.width(); // 图片高度
      var imageH = self.height();

      self.find("img").css({
        width: "100%",
        height: "100%",
        borderRadius: "5px",
      });

      // 宽放大倍数
      var wTimes = paras.showPanelW / paras.layerW;
      // 高放大倍数
      var hTimes = paras.showPanelH / paras.layerH;

      // 放大图片
      var img = $("<img>")
        .attr("src", self.attr("href"))
        .css({
          position: "absolute",
          left: "0",
          top: "0",
          borderRadius: "5px",
          width: imageW * wTimes,
          height: imageH * hTimes,
        })
        .attr("id", "big-img");

      // 遮罩
      var layer = $("<div>").css({
        display: "none",
        position: "absolute",
        left: "0",
        top: "0",
        backgroundColor: paras.layerBgc,
        width: paras.layerW,
        height: paras.layerH,
        opacity: paras.layerOpacity,
        border: "1px solid #ccc",
        cursor: "crosshair",
        borderRadius: "5px",
      });

      // 放大区域
      var showPanel = $("<div>")
        .css({
          display: "none",
          position: "absolute",
          overflow: "hidden",
          left: imageW + paras.marginL,
          top: paras.marginT,
          width: paras.showPanelW,
          height: paras.showPanelH,
          borderRadius: "5px",
        })
        .append(img);

      self.append(layer).append(showPanel);
// self.on("dragover", function (e) {
//   var dragX = e.pageX, dragY = e.pageY;
//  console.log("X: " + dragX + " Y: " + dragY);
// })
      self
        .on("mousemove", function (e) {
          // 鼠标相对于缩略图容器的坐标
          var x = e.pageX - selfOffset.left;
          var y = e.pageY - selfOffset.top;
          // console.log("X: " + x + " Y: " + y);
          if (x <= paras.layerW / 2) {
            x = 0;
          } else if (x >= imageW - paras.layerW / 2) {
            x = imageW - paras.layerW;
          } else {
            x = x - paras.layerW / 2;
          }

          if (y < paras.layerH / 2) {
            y = 0;
          } else if (y >= imageH - paras.layerH / 2) {
            y = imageH - paras.layerH;
          } else {
            y = y - paras.layerH / 2;
          }

          layer.css({
            left: x,
            top: y,
          });

          img.css({
            left: -x * wTimes,
            top: -y * hTimes,
          });
        })
        .on("mouseenter", function () {
          layer.show();
          showPanel.show();
          $(".details_info").css({ position: "relative", "z-index": "-5" });
        })
        .on("mouseleave", function () {
          layer.hide();
          showPanel.hide();
          $(".details_info").css({
            position: "relative",
            "z-index": "250",
          });
        });
    });
  };
})(jQuery);
