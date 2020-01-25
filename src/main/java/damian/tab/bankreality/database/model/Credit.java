package damian.tab.bankreality.database.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Data
public class Credit extends BaseModel {
//    @Id
//    @NotNull
//    @GeneratedValue(generator = "credit_generator")
//    @SequenceGenerator(name = "credit_generator", sequenceName = "credit_sequence", initialValue = 3000000, allocationSize = 10)
//    private int id;

    @NotNull
    @Column
    private double loanAmount;

    @NotNull
    @Column
    private int interestRate;

    @NotNull
    @Column
    private int loanTime;

    @NotNull
    @Column
    private double EMI;

//    @ManyToOne
//    @JoinColumn(name = "login")
////    @EmbeddedId
//    private Client client;

//    @ManyToOne
//    @JoinColumn(name = "accountNumber")
////    @EmbeddedId
//    private Account account;

    @EmbeddedId
    private CreditKey key;

    @Data
    @EqualsAndHashCode(callSuper = true)
    private class CreditKey extends PrimaryKey{
        @NotNull
        @GeneratedValue(generator = "credit_generator")
        @SequenceGenerator(name = "credit_generator", sequenceName = "credit_sequence", initialValue = 3000000, allocationSize = 10)
        private int id;

        @ManyToOne
        @JoinColumn(name = "login")
//    @EmbeddedId
        private Client client;

        @ManyToOne
        @JoinColumn(name = "accountNumber")
//    @EmbeddedId
        private Account account;
    }
}

