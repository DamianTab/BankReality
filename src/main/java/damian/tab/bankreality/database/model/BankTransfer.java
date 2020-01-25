package damian.tab.bankreality.database.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
public class BankTransfer implements Serializable {

    @Id
    @NotNull
    @GeneratedValue(generator = "BankTransfer_generator")
    @SequenceGenerator(name = "BankTransfer_generator", sequenceName = "BankTransfer_sequence", initialValue = 5000000, allocationSize = 10)
    private int id;

    @NotNull
    @Column
    private double transferAmount;

    @NotNull
    @Column
    private Date transferDate;

    @ManyToOne
    @JoinColumn(name = "accountNumberSender")
    @EmbeddedId
    private Account sender;

    @ManyToOne
    @JoinColumn(name = "accountNumberReceiver")
    @EmbeddedId
    private Account receiver;
}
