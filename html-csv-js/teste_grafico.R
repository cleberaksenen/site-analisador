library(ggplot2)

data <-  read.csv("dados.csv", sep=';')

col_names <- names(data)

ggplot(data = data, aes(x = .data[[col_names[3]]], y = .data[[col_names[2]]], fill = .data[[col_names[3]]])) + 
  geom_violin(alpha = 0.5, position = position_dodge(width = 0.75), size = 1, color = NA) +
  scale_fill_manual(values = c("#b967ff", "#fffb96")) +
  geom_boxplot(notch = F, outlier.size = -1, color = "black", lwd = 1, alpha = 0.7, show.legend = F) +
  ggbeeswarm::geom_quasirandom(shape = 21, dodge.width = 0.75, color = "black", alpha = 0.5, show.legend = F)